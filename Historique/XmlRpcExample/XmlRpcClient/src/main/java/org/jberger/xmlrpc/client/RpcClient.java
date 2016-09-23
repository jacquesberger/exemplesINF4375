/*
 * Copyright 2012 Jacques Berger.
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
package org.jberger.xmlrpc.client;

import java.util.Vector;
import org.apache.xmlrpc.XmlRpcClient;

public class RpcClient {

    static final int HTTP_PORT_NUMBER = 8080;
    
    public static void main(String[] args) {
        try {
            XmlRpcClient server = new XmlRpcClient("localhost", HTTP_PORT_NUMBER);
            Vector params = new Vector();
            params.addElement("INF4375");
            params.addElement(new Integer(50));

            Object result = server.execute("services.getStudentCount", params);

            int count = ((Integer) result).intValue();
            System.out.println("There is " + count + " students in this group.");
        } catch (Exception exception) {
            System.err.println(exception);
        }
    }
}
