/*
    Copyright 2021 Viribus LLC & Contributors.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

!function(win){
    function get(url){
        this.url = url;
        if(!url||url==undefined|null||!url.length==0&&url[0]==undefined|null||typeof url!=="string"){
            throw new ViribusError("Parameter URL is not defined or invalid. (Expected String, received " + typeof url + ".")
        } else {
            fetch(url).then(res=>res.json()).then(json=>{return json})
        }
    }
    var a,b,c,d,e,f,g,h,i,j,k;
    a=new Object();
    b=win.document.getElementsByTagName('script')[0];
    if(!b){
        throw new Error("Variable 'b' which indexes for the first script element is not defined.")
    }
    if(!obj){
        throw new Error("Variable 'obj' which contains the data for the client was not found.")
    }
    if("object"!==typeof obj){
        throw new Error("Variable 'obj' is invalid (Expected Object, received " + typeof obj + ".");
    }
    document.getElementById('signup').addEventListener('click', function (fun) {
        fun.preventDefault(), true;
        c=win.document.getElementById('email');
        d=win.document.getElementById('uname');
        e=win.document.getElementById('fname');
        f=win.document.getElementById('lname');
        g=win.document.getElementById('age');
        i=win.document.getElementById('pwd');
    })
}(this)

//# sourceMappingURL main.script.js.map