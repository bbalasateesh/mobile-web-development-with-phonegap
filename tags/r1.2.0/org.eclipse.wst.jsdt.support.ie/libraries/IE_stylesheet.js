/******************************************************************************* * Copyright (c) 2007, 2008 IBM Corporation and others. * All rights reserved. This program and the accompanying materials * are made available under the terms of the Eclipse Public License v1.0 * which accompanies this distribution, and is available at * http://www.eclipse.org/legal/epl-v10.html * * Contributors: *     IBM Corporation - initial API and implementation ****************************************************************************** * **//**  * Object styleSheet()  * @type styleSheet  * @super Object  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms535871.aspx*/function styleSheet(){};styleSheet.prototype= new Object();/**  * Property canHaveHTML  * @type Boolean  * @returns {Boolean}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms537836.aspx*/styleSheet.prototype.canHaveHTML=false;/**  * Property disabled  * @type Boolean  * @returns {Boolean}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms533732.aspx*/styleSheet.prototype.disabled=false;/**  * Property href  * @type String  * @returns {String}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms533860.aspx*/styleSheet.prototype.href="";/**  * Property id  * @type String  * @returns {String}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms533880.aspx*/styleSheet.prototype.id="";/**  * Property isContentEditable  * @type Boolean  * @returns {Boolean}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms537838.aspx*/styleSheet.prototype.isContentEditable=false;/**  * Property isDisabled  * @type Boolean  * @returns {Boolean}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms533902.aspx*/styleSheet.prototype.isDisabled=false;/**  * Property isMultiLine  * @type Boolean  * @returns {Boolean}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms537839.aspx*/styleSheet.prototype.isMultiLine=false;/**  * Property owningElement  * @type Object  * @returns {Object}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms534316.aspx*/styleSheet.prototype.owningElement=new Object();/**  * Property parentStyleSheet  * @type Object  * @returns {Object}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms534329.aspx*/styleSheet.prototype.parentStyleSheet=new Object();/**  * Property readOnly  * @type Boolean  * @returns {Boolean}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms534356.aspx*/styleSheet.prototype.readOnly=false;/**  * Property title  * @type String  * @returns {String}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms534682.aspx*/styleSheet.prototype.title="";/**  * Property type  * @type String  * @returns {String}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms534699.aspx*/styleSheet.prototype.type="";/**  * Property imports  * @type imports  * @returns {imports}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/aa358805.aspx*/styleSheet.prototype.imports= new imports();/**  * function addImport(sURL,iIndexRequest)  * @param {String} sURL  * @param {Number} iIndexRequest  * @type imports  * @returns {imports}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms531193.aspx*/styleSheet.prototype.addImport=function(sURL,iIndexRequest){};/**  * Property imports  * @type imports  * @returns {imports}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/aa358805.aspx*/styleSheet.prototype.imports= new imports();/**  * function addPageRule(sSelector,sStyle,iIndex)  * @param {String} sSelector  * @param {String} sStyle  * @param {Number} iIndex  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms535928.aspx*/styleSheet.prototype.addPageRule=function(sSelector,sStyle,iIndex){};/**  * function addRule(sSelector,sStyle,iIndex)  * @param {String} sSelector  * @param {String} sStyle  * @param {Number} iIndex  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/aa358796.aspx*/styleSheet.prototype.addRule=function(sSelector,sStyle,iIndex){};/**  * function fireEvent(sEvent,oEventObject)  * @param {String} sEvent  * @param {event} oEventObject  * @type Boolean  * @returns {Boolean}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms536423.aspx*/styleSheet.prototype.fireEvent=function(sEvent,oEventObject){};/**  * function removeImport(iIndex)  * @param {Number} iIndex  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/aa358799.aspx*/styleSheet.prototype.removeImport=function(iIndex){};/**  * function removeRule(iIndex)  * @param {Number} iIndex  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms531195.aspx*/styleSheet.prototype.removeRule=function(iIndex){};/**  * Property rules  * @type rules  * @returns {rules}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms531199.aspx*/styleSheet.prototype.rules= new rules();/**  * Property page  * @type page  * @returns {page}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms535879.aspx*/styleSheet.prototype.page= new page();/**  * Property imports  * @type imports  * @returns {imports}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/aa358805.aspx*/styleSheet.prototype.imports= new imports();/**  * Property pages  * @type pages  * @returns {pages}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms531198.aspx*/styleSheet.prototype.pages= new pages();/**  * Property page  * @type page  * @returns {page}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms535879.aspx*/styleSheet.prototype.page= new page();/**  * Property rules  * @type rules  * @returns {rules}
  * @memberOf styleSheet  * @since JScript 5.6  * @see http://msdn2.microsoft.com/en-us/library/ms531199.aspx*/styleSheet.prototype.rules= new rules();