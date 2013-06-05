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

var taxes = require("./taxes/taxes");

exports.index = function(req, res) {
  res.json(taxes.getTaxRates());
};

exports.taxes = function(req, res) {
  // La gestion d'erreurs n'a pas été faite.
  var price = parseFloat(req.params.unit);
  var quantity = parseInt(req.params.quantity, 10);
  res.json(taxes.getTotalWithTaxes(price, quantity));
};
