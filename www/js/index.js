/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
        setTimeout(function(){
            app.loadARchitectWorld();
        }, 5000);
    },
    loadARchitectWorld: function() {
        app.wikitudePlugin.isDeviceSupported(function() {
            app.wikitudePlugin.loadARchitectWorld(function successFn(loadedURL) {
                }, function errorFn(error) {
                    alert('Loading failed: ' + error);
                },
                cordova.file.dataDirectory + 'www/wyd/index.html', [ '2d_tracking' ], { camera_position: 'back' }
            );
        }, function(errorMessage) {
            alert(errorMessage);
        },
        [ '2d_tracking' ]
        );
    }
};
