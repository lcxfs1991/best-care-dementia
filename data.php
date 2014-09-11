<?php

header('Content-Type: text/html; charset=utf-8');

$data[0] = ['question' => '请回答', 'point' => array('今年的年份是?')];
$data[1] = ['question' => '请回答', 'point' => array('现在是什么季节?')];
$data[2] = ['question' => '请回答', 'point' => array('今天是几号?')];
$data[3] = ['question' => '请回答', 'point' => array('今天是星期几?')];
$data[4] = ['question' => '请回答', 'point' => array('现在是几月份?')];
$data[5] = ['question' => '请回答', 'point' => array('你能告诉我现在我们在哪里(省、市)?')];
$data[6] = ['question' => '请回答', 'point' => array('你住在哪个区县?')];
$data[7] = ['question' => '请回答', 'point' => array('你住在什么街道?')];
$data[8] = ['question' => '请回答', 'point' => array('我们现在是在几楼?')];
$data[9] = ['question' => '请回答', 'point' => array('这里是什么地方?')];
$data[10] = ['question' => '说出三样东西的名称(每样东西一秒钟), 继续重复这三样东西,直到受试者能全部正确复述,最多可重复6次,还不能复述记0分.', 
			 'point' => array('皮球', '国旗', '树木')];

$data[11] = ['question' => '做100减7,然后从所得到的数目再减去7', 
			 'point' => array('100 - 7 = ?', '93 - 7 = ? ', '86 - 7 = ? ', '79 - 7 = ? ', '72 - 7 = ? ', '65 - 7 = ? ')];

$data[12] = ['question' => '现在告诉我刚才我要你记住的三样东西是什么?', 
			 'point' => array('皮球', '国旗', '树木')];	

$data[13] = ['question' => '请问这是什么?', 'point' => array('橡皮'), 'img' => array('res/eraser.png')];	

$data[14] = ['question' => '请问这是什么?', 'point' => array('铅笔'), 'img' => array('res/pen.png')];	

$data[15] = ['question' => '说"四十四只石狮子"一遍,让受试者清楚重复一遍,只有正确咬字清楚才记1分', 
			 'point' => array('四十四只石狮子')];	

$data[16] = ['question' => '把手机交给测试者,让他按照屏幕内容去做以下动作:', 
			 'point' => array('请闭上你的眼睛')];	


$data[17] = ['question' => '给受试者一张纸,并说"请你用右手拿这张纸,再请你用双手把它对折,然后将纸放在大腿上"(不重复说明,也不示范)', 
			 'point' => array('用右手拿纸', '将纸对折', '放在大腿上')];	

$data[18] = ['question' => '请你说一句完整的句子。句子必须有主词、动词,有意义', 
			 'point' => array('让测试者记下所叙述的句子的全文,并写出来')];	

$data[19] = ['question' => '这是一张图,请你在同一张纸上照样把它画出来', 'point' => array('卡片上有两个5边形叠加的图片'), 'img' => array('res/card.jpg')];	



$json_data = json_encode($data, JSON_UNESCAPED_UNICODE);

echo $json_data;

?>