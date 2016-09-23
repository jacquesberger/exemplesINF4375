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
package org.jberger.xmlrpc.server;

import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class Groups {

    private Document document;

    public Groups(String documentFilePath)
            throws ParserConfigurationException, SAXException, IOException {
        parseXmlDocument(documentFilePath);
    }

    private void parseXmlDocument(String documentFilePath)
            throws ParserConfigurationException, SAXException, IOException {
        DocumentBuilderFactory documentFactory = initializeDocumentFactory();
        DocumentBuilder parser = documentFactory.newDocumentBuilder();
        document = parser.parse(documentFilePath);
    }

    private DocumentBuilderFactory initializeDocumentFactory() {
        DocumentBuilderFactory documentFactory = DocumentBuilderFactory.newInstance();
        documentFactory.setIgnoringComments(true);
        documentFactory.setCoalescing(true);
        documentFactory.setNamespaceAware(true);
        return documentFactory;
    }

    public int getStudentCount(String courseId, int groupId) {
        NodeList groups = document.getElementsByTagName("group");
        for (int i = 0; i < groups.getLength(); i++) {
            Element group = (Element) groups.item(i);
            
            Element courseIdElement = (Element) group.getElementsByTagName("courseId").item(0);
            if (courseId.equals(courseIdElement.getTextContent())) {
                Element groupIdElement = (Element) group.getElementsByTagName("groupId").item(0);
                int thisGroupId = Integer.parseInt(groupIdElement.getTextContent());
                
                if (groupId == thisGroupId) {
                    Element countElement = (Element) group.getElementsByTagName("studentCount").item(0);
                    return Integer.parseInt(countElement.getTextContent());
                }
            }
        }
        
        return -1;
    }
}
