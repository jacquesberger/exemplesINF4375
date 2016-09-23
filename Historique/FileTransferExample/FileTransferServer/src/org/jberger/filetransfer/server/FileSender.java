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
package org.jberger.filetransfer.server;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;

public class FileSender {

    private final String confirmationStamp = "OK";
    private Socket communicationSocket;
    private BufferedReader socketReader;
    private PrintWriter socketWriter;
    private OutputStream outputStreamOnSocket;

    public FileSender(Socket socket) throws IOException {
        communicationSocket = socket;
        socketReader = new BufferedReader(new InputStreamReader(communicationSocket.getInputStream()));
        outputStreamOnSocket = communicationSocket.getOutputStream();
        socketWriter = new PrintWriter(outputStreamOnSocket, true);
    }

    public void sendFile(String filePath) throws IOException, MissingTransferConfirmationException {
        long fileLength = getFileLength(filePath);
        transferFileLengthToClient(fileLength);
        transferFileToClient(filePath, fileLength);
    }

    private void checkForTransferConfirmation() throws MissingTransferConfirmationException, IOException {
        validateTransferConfirmation(socketReader.readLine());
    }
    
    private void transferFileLengthToClient(long fileLength) throws MissingTransferConfirmationException, IOException {
        socketWriter.println(fileLength);
        checkForTransferConfirmation();
    }
    
    private void transferFileToClient(String filePath, long fileLength) throws FileNotFoundException, IOException, MissingTransferConfirmationException {
        sendFileToClient(filePath, fileLength);
        checkForTransferConfirmation();
    }
    
    private long getFileLength(String filePath) {
        File file = new File(filePath);
        return file.length();
    }

    private void validateTransferConfirmation(String receivedLine) throws MissingTransferConfirmationException {
        if (!receivedLine.equals(confirmationStamp)) {
            throw new MissingTransferConfirmationException("Transfer confirmation not received.");
        }
    }
    
    private void sendFileToClient(String filePath, long fileLength) throws FileNotFoundException, IOException {
        byte[] dataArray = new byte[(int) fileLength];
        File myFile = new File(filePath);
        FileInputStream inputStreamOnFile = new FileInputStream(myFile);
        BufferedInputStream fileReader = new BufferedInputStream(inputStreamOnFile);
        fileReader.read(dataArray, 0, dataArray.length);
        outputStreamOnSocket.write(dataArray, 0, dataArray.length);
        outputStreamOnSocket.flush();
    }
}
