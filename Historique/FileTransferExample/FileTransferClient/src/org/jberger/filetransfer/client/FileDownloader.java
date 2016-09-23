/*
 * Copyright 2011 Jacques Berger.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jberger.filetransfer.client;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;

public class FileDownloader {

    static final String confirmationStamp = "OK";
    private Socket socket;
    private InputStream inputStreamOnSocket;
    private BufferedReader socketReader;
    private PrintWriter socketWriter;

    public FileDownloader(String serverIPAddress, int communicationPort) throws UnknownHostException, IOException {
        socket = new Socket(serverIPAddress, communicationPort);
        inputStreamOnSocket = socket.getInputStream();
        socketReader = new BufferedReader(new InputStreamReader(inputStreamOnSocket));
        socketWriter = new PrintWriter(socket.getOutputStream(), true);
    }

    public void downloadFile(String newFileDestination) throws UnknownHostException, IOException, WrongFileLengthException {
        long filesize = getFileLengthFromServer();
        byte[] fileBytes = readFileFromServer(filesize);
        saveToFile(fileBytes, newFileDestination);
    }

    private void saveToFile(byte[] fileBytes, String newFileDestination) throws FileNotFoundException, IOException {
        BufferedOutputStream fileWriter = new BufferedOutputStream(new FileOutputStream(newFileDestination));
        fileWriter.write(fileBytes, 0, fileBytes.length);
        fileWriter.flush();
        fileWriter.close();
    }

    private long getFileLengthFromServer() throws IOException {
        return Long.parseLong(readFileLength());
    }

    private String readFileLength() throws IOException {
        String serializedFileLength = socketReader.readLine();
        sendTransferConfirmation();
        return serializedFileLength;
    }

    private byte[] readFileFromServer(long fileLength) throws IOException, WrongFileLengthException {
        byte[] fileBytes = new byte[(int) fileLength];
        readAllFileBytes(fileBytes, fileLength);
        sendTransferConfirmation();
        return fileBytes;
    }

    private void readAllFileBytes(byte[] fileBytes, long fileLength) throws IOException, WrongFileLengthException {
        int numberOfBytesRead = inputStreamOnSocket.read(fileBytes, 0, fileBytes.length);
        int numberOfBytesReadSoFar = numberOfBytesRead;

        do {
            numberOfBytesRead = inputStreamOnSocket.read(fileBytes, numberOfBytesReadSoFar, fileBytes.length - numberOfBytesReadSoFar);
            if (numberOfBytesRead >= 0) {
                numberOfBytesReadSoFar += numberOfBytesRead;
            }
        } while (numberOfBytesRead > 0);

        if (numberOfBytesReadSoFar != fileLength) {
            throw new WrongFileLengthException("File length do not match the length sent from the server");
        }
    }

    private void sendTransferConfirmation() {
        socketWriter.println(confirmationStamp);
    }
}
