/*
 * Copyright 2013 Jacques Berger.
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

var federalTaxRate = 0.05;
var provincialTaxRate = 0.09975;

exports.getTaxRates = function() {
  return {federalRate: federalTaxRate, provincialRate: provincialTaxRate};
};

exports.getTotalWithTaxes = function(unitPrice, quantity) {
  // Ne jamais traiter les valeurs monétaires de cette façon en production.
  var subtotal = (unitPrice * quantity).toFixed(2);
  var federalTaxAmount = (subtotal * federalTaxRate).toFixed(2);
  var provincialTaxAmount = (subtotal * provincialTaxRate).toFixed(2);
  var total = (parseFloat(subtotal) + parseFloat(federalTaxAmount) + 
              parseFloat(provincialTaxAmount)).toFixed(2);
  return {
    subtotal: subtotal,
    federalTax: federalTaxAmount,
    provincialTax: provincialTaxAmount,
    total: total
  };
};
