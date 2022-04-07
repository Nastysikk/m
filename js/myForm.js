var app = angular.module('myFormApp', [])
    app.controller("formCtrl", function ($scope) {
      $scope.originalform= {
      suma: '',
      valute: "euro",
      stavka: '9.5',
      termin: "1month",
      procents: false,
      terminofdeposite: false,
      telephone: '',
    };
    $scope.re = /^\d\.\d$/;
     $scope.forms = angular.copy($scope.originalform);
     $scope.save = function (forms, myForm){
            if(myForm.$valid){
                alert("Ваша кінцева сума обчислена");
            }
          }
});

app.directive('depositsum', function () {
        return {
            require: 'ngModel',
            link: function (sscope, element, attributes, control) {
                control.$validators.depositsum = function (modelValue, viewValue) {

                    if (control.$isEmpty(modelValue)) // if empty, correct value
                    {
                        return true;
                    }
                    
                    var sum = Number(viewValue);
                    
                    if (sum >= 100 && sum <= 150000 && sum % 10 ===0) // correct value
                    {
                        return true;
                    }
                    return false; // wrong value
                };
            }
        };
    });
