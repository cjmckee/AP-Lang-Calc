$(document).ready(function(){

var calculate = function()
{ var weightedmc = $('.mc').val();

if (weightedmc > 52)
	weightedmc = 52;
else if (weightedmc < 0)
	weightedmc = 0;
	
console.log(weightedmc);
	
var perc = (weightedmc/52 * 100).toFixed(0);
weightedmc *= 1.2980;
console.log(weightedmc);
var weightedfrq = 0;
var sum = 0;
var weighted1 = 0;
var weighted2 = 0;
var weighted3 = 0;

if ($("#grading").is(':checked') == true)
{ weighted1 = $("#essay1").val();
weighted1 = parseInt(weighted1);
weighted2 = $("#essay2").val();
weighted2 = parseInt(weighted2);
weighted3 = $("#essay3").val();
weighted3 = parseInt(weighted3);
console.log(weighted1 + " " + weighted2 + " " + weighted3);

	var low = Math.min(weighted1, weighted2, weighted3)
	
	sum = (weighted1 + weighted2 + weighted3 - low) * 3/2; }
else if ($("#grading").is(':checked') == false)
{ for (var k = 1; k < 4; k++)
{ weightedfrq = $("#essay" + k).val();
weightedfrq = parseInt(weightedfrq);
if (weightedfrq > 9)
	weightedfrq = 9;
else if (weightedfrq < 0)
	weightedfrq = 0;
sum += weightedfrq; 
console.log(sum);} }

sum *= 3.0556;
console.log(sum);

var score = 0;
var comp = (weightedmc + sum).toFixed(0);
console.log(comp);

if (comp <= 150 && comp >= 112)
	score = 5;
else if (comp <= 111 && comp >= 98)
	score = 4;
else if (comp <= 97 && comp >= 80)
	score = 3;
else if (comp <= 79 && comp >= 55)
	score = 2;
else
	score = 1;
	
$('#mcoutput').text(perc + "%");
$('#output').text(score);

weightedmc = 0;
comp = 0; }

$('#calculator').click(function() {
	calculate(); });
	
});
