function questionController($scope, $http){
	
	$scope.totalScore = 0;      		// total score of the test
	$scope.study = 0;					// education level
	$scope.studyCheck = true;			// education level block display true/false
	$scope.studyHint = "";				// hint of education level checking
	$scope.questionStart = false;		// question block display true/false
	$scope.prevScore = [];				// store previous stock score in order to go back and deduct from total score
	$scope.questionResult = false;		// question result block display true/false
	$scope.ResultText = "";				// question result text
	$scope.figure = null;				// image of questions
	$scope.hint = null;					// question instruction
	$scope.nextPageDisplay = false;		// question next button display true/false

	// get education level
	$scope.getStudy = function(){
		if ($scope.study > 0){
			$scope.studyCheck = false;
			$scope.questionStart = true;
		}
		else {
			$scope.studyHint = "请选择被测试者的教育程度";
		}
	}

	//get question data
	$http.get('data.php').success(function(response){

		var i = 0;
		var data = response;
		$scope.showQuestion = data[i]; 

		// generate score button
		$scope.btn = function(){
			$scope.pointsLen = [];

			for (var j = 0; j < data[i]['point'].length + 1; j++){
				$scope.pointsLen[j] = j;
			}
		}
		
		$scope.btn();

		// score button function
		$scope.page = function(score){

			$scope.prevScore.push(score);
			$scope.totalScore += $scope.prevScore[i];
			$scope.figure = null;
			$scope.hint = null;

			if (data[i + 1] != undefined){
				$scope.showQuestion = data[++i];

				$scope.getContent();

				// if ($scope.showQuestion['img'] != undefined){
				// 	$scope.figure = $scope.showQuestion['img'][0];
				// }

				// if ($scope.showQuestion['instruction'] != undefined){
				// 	$scope.hint = $scope.showQuestion['instruction'][0];
				// }

				// if ($scope.showQuestion['type'] != undefined){
				// 	$scope.nextPageDisplay = true;
				// 	$scope.pointsLen = [];
				// }
				// else {
				// 	$scope.btn();
				// 	$scope.nextPageDisplay = false;
				// }
			}
			else if (data[i + 1] == undefined){

				$scope.getResult();
				$scope.questionResult = true;
				$scope.questionStart = false;
			}
			
		}

		//go back button function
		$scope.goBack = function(){

			if (i > 0){
				$scope.totalScore -= $scope.prevScore[i - 1];
				$scope.prevScore.pop();
				$scope.showQuestion = data[--i];
				$scope.figure = null;
				$scope.hint = null;

				$scope.getContent();
				
			}
			else if (i == 0){
				$scope.studyCheck = true;
				$scope.questionStart = false;
			}
			
		}

		//reusage part of score button and go back button
		$scope.getContent = function(){

			if ($scope.showQuestion['img'] != undefined){
					$scope.figure = $scope.showQuestion['img'][0];
			}

			if ($scope.showQuestion['hint'] != undefined){
					$scope.hint = $scope.showQuestion['instruction'][0];
			}

			if ($scope.showQuestion['type'] != undefined){
				$scope.nextPageDisplay = true;
				$scope.pointsLen = [];
			}
			else {
				$scope.btn();
				$scope.nextPageDisplay = false;
			}
		}

		//display question result
		$scope.getResult = function(){
			
			$scope.ResultText = "恭喜你完成测试, 总分为"+$scope.totalScore;
			var risk = "。 您的智能状态受损, 建议到正规医院诊断, 请关注\"不痴呆BCD\"公众号, 抓住黄金干预期。";
			var safe = "。 您的智能状态良好，建议每半年测试一次, 请关注\"不痴呆BCD\"公众号, 爱护脑健康。";

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