



function Account($scope, $http) {
    $http.get('http://127.0.0.1:8080/account?emp_id=2').
        success(function(data) {
            $scope.account = data;
        });
}


function Hello($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}
