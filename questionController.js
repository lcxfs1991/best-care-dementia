function questionController($scope, $http){
	
	$scope.totalScore = 0;
	$scope.study = 0;
	$scope.studyCheck = true;
	$scope.studyHint = "";
	$scope.questionStart = false;
	$scope.prevScore = [];
	$scope.questionResult = false;
	$scope.ResultText = "";
	$scope.figure = null;

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
			$scope.figure = null;

			if (data[i + 1] != undefined){
				$scope.showQuestion = data[++i];

				if ($scope.showQuestion['img'] != undefined){
					$scope.figure = $scope.showQuestion['img'][0];
				}

				$scope.btn();
			}
			else if (data[i + 1] == undefined){

				$scope.getResult();
				$scope.questionResult = true;
				$scope.questionStart = false;
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

		$scope.getResult = function(){
			
			$scope.ResultText = "被测试者的得分是"+$scope.totalScore;
			var risk = ". 患痴呆症的风险较高, 请尽早到医院进行全面检查.";
			var safe = ". 患痴呆症的风险较小, 但亦请密切留意老人健康.";

			if ($scope.study == 1){

				if ($scope.totalScore <= 17){
					$scope.ResultText += risk;
				}
				else {
					$scope.ResultText += safe;
				}
			}
			else if ($scope.study == 2){
				
				if ($scope.totalScore <= 20){
					$scope.ResultText += risk;
				}
				else {
					$scope.ResultText += safe;
				}
			}
			else if ($scope.study == 3){

				if ($scope.totalScore <= 24){
					$scope.ResultText += risk;
				}
				else {
					$scope.ResultText += safe;
				}
			}
		}

	});


}