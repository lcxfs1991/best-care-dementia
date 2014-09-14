<?php

header('Content-Type: text/html; charset=utf-8');

$data[0] = ['question' => '1. 今年的年份是?', 'point' => array('')];
$data[1] = ['question' => '2. 现在是什么季节?', 'point' => array('')];
$data[2] = ['question' => '3. 今天是几号?', 'point' => array('')];
$data[3] = ['question' => '4. 今天是星期几?', 'point' => array('')];
$data[4] = ['question' => '5. 现在是几月份?', 'point' => array('')];
$data[5] = ['question' => '6. 你现在在哪个省哪个市?', 'point' => array('')];
$data[6] = ['question' => '7. 你住在哪个区县?', 'point' => array('')];
$data[7] = ['question' => '8. 你住在什么街道(村)?', 'point' => array('')];
$data[8] = ['question' => '9. 你现在是在几楼?', 'point' => array('')];
$data[9] = ['question' => '10. 这里是什么地方?', 'point' => array('')];
$data[10] = ['question' => '11. 现在, 我说三样东西的名称, 请你复述并记住。', 'instruction' => array('提示: 测试者每正确复述一个词, 计1分, 考官最多可重复说六次'), 
			 'point' => array('皮球 (1分)', '国旗 (1分)', '树木 (1分)')];

$data[11] = ['question' => '12. 做100减7,然后从所得到的数目再减去7, 如此一直计算下去，把每一个答案说出来，直到我说停为止。', 'type' => 'question',
			 'instruction'=> array('提示: 如果算错, 也接着减下去, 每次算对得一分。可参考下一页的得分点。'), 'point' => array()];

$data[12] = ['question' => '以下是得分点。', 
			 'point' => array('100 - 7 = ? (1分)', '93  - 7 = ? (1分)', '86  - 7 = ? (1分)', '79  - 7 = ? (1分)', '72  - 7 = ? (1分)')];

$data[13] = ['question' => '13. 现在请说出刚才让你记住的三样东西是什么?', 
			 'point' => array('皮球 (1分)', '国旗 (1分)', '树木 (1分)')];	

$data[14] = ['question' => '14. 考官出示一张纸问, 这是什么？', 'point' => array('纸')];	

$data[15] = ['question' => '15. 考官出示一支笔问，这是什么?', 'point' => array('笔')];	

$data[16] = ['question' => '16. 现在我说一句话，请你清楚地重复一遍，这句话是"四十四只狮子"。', 'instruction' => array('提示: 考官只说一遍，被测者说正确才记1分'), 
			 'point' => array('四十四只石狮子')];	

$data[17] = ['question' => '17. 把手机交给测试者,让他按照屏幕内容去做以下动作:', 
			 'point' => array('请闭上你的眼睛'), 'highlight' => true];	


$data[18] = ['question' => '18. 给受试者一张纸,并说"请你用右手拿这张纸,再请你用双手把它对折,然后将纸放在大腿上"。', 'insruction' => '提示: 考官不重复, 也不示范', 
			 'point' => array('用右手拿纸 (1分)', '将纸对折 (1分)', '放在大腿上 (1分)')];	

$data[19] = ['question' => '19. 请你说一句完整的、有意义的句子', 'instruction' => array('提示: 句子必须有主语、动词'), 
			 'point' => array('句子符合有主语、动词和有意义的句子')];	

$data[20] = ['question' => '20.请在纸上画出这张图。', 'type' => 'question', 'point' => array(''), 'img' => array('res/card.jpg')];	

$data[21] = ['question' => '两个五边形图案，交叉处形成一个小四边形，才算对。', 'point' => array('')];	

$json_data = json_encode($data, JSON_UNESCAPED_UNICODE);

echo $json_data;

?>