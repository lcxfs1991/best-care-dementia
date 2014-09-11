function questionController($scope, $http){
	
	$scope.totalScore = 0;
	$scope.study = 0;
	$scope.studyCheck = true;
	$scope.studyHint = "";
	$scope.questionStart = false;
	$scope.prevScore = [];

	$scope.getStudy = function(){
		if ($scope.study > 0){
			$scope.studyCheck = false;
			$scope.questionStart = true;
		}
		else {
			$scope.studyHint = "请选择被测试者的教育程度";
		}
	}

	$http.get('data.php').success(function(response){

		var i = 0;
		var data = response;
		$scope.showQuestion = data[i]; 

		$scope.btn = function(){
			$scope.pointsLen = [];

			for (var j = 0; j < data[i]['point'].length + 1; j++){
				$scope.pointsLen[j] = j;
			}
		}
		
		$scope.btn();

		$scope.page = function(score){

			$scope.prevScore.push(score);
			$scope.totalScore += $scope.prevScore[i];

			if (data[i + 1] != undefined){
				$scope.showQuestion = data[++i];
				$scope.btn();
			}
			
		}

		$scope.goBack = function(){

			if (i > 0){
				$scope.totalScore -= $scope.prevScore[i - 1];
				$scope.prevScore.pop();
				$scope.showQuestion = data[--i];
				$scope.btn();
			}
			else if (i == 0){
				$scope.studyCheck = true;
				$scope.questionStart = false;
			}
			
		}

	});


}