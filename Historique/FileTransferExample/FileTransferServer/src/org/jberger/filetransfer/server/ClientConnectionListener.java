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

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class ClientConnectionListener {

    private int communicationPort;
    private static final String fileToTransfer = "files/testing.xml";

    public ClientConnectionListener(int port) {
        communicationPort = port;
    }

    public void listenForClientConnections() {
        try {
            ServerSocket listeningServerSocket = new ServerSocket(communicationPort);
            while (true) {
                Socket socketToClient = listeningServerSocket.accept();
                sendFileToClient(socketToClient);
                socketToClient.close();
            }
        } catch (IOException ex) {
            System.out.println("Error: " + ex.getMessage());
        }
    }

    private void sendFileToClient(Socket socketToClient) throws IOException {
        try {
            FileSender sender = new FileSender(socketToClient);
            sender.sendFile(fileToTransfer);
        } catch (MissingTransferConfirmationException ex) {
            System.out.println("Error communicating with client: " + ex.getMessage());
        }

    }
}