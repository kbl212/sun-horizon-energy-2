var app = angular.module('sunhorizonenergy');


app.controller('contactCtrl', function ($scope, $http) {
            $scope.initMap = function () {
                var myLatLng = {
                    lat: 40.288175,
                    lng: -111.693569
                };

                $scope.map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 16,
                    center: myLatLng
                });

                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: $scope.map,
                    title: 'sunHorizonEnergy'
                });
            }

            $scope.initMap();

            $scope.isValidEmail = false;

            $scope.isEmail = function (email) {
                var returnVal = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);
                $scope.isValidEmail = returnVal;
                return returnVal;
            }

            $scope.sendEmail = function () {
                $http({
                    method: "POST",
                    url: "resources/php/send_mail.php",
                    data: {
                        clientName: $scope.emailName,
                        email: $scope.emailAddress,
                        subject: $scope.emailSubject,
                        message: $scope.emailMessage
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (result) {
                    console.log('SUCCESS', result);
                }).error(function (result) {
                    console.log('failure...');
                })

            };

            $scope.emailSubmit = function () {
                if ($scope.emailName && $scope.isValidEmail && $scope.emailSubject && $scope.emailMessage) {
                    $scope.sendEmail();
                } else if (!$scope.isValidEmail) {
                    alert("Please enter a valid email address");
                } else {
                    alert("Please fill out all required fields");
                }
                $scope.emailName = "";
                $scope.emailAddress = "";
                $scope.emailSubject = "";
                $scope.emailMessage = "";
                $scope.isValidEmail = false;

            }
});