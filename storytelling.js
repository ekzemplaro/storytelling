// -----------------------------------------------------------------------
//	storytelling.js
//
//					Aug/31/2021
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** storytelling *** start ***")

	var order = jQuery('input:radio[name="order"]:checked').val();
	jQuery('#outarea_bb').text(order);


	display_information()

	var file_in = "./source.json"

	jQuery.getJSON (file_in,function (data_aa)
		{
		show_table_proc(data_aa,order)

		jQuery('input:radio[name="order"]').change(function()
			{
			jQuery('#outarea_dd').text("*** change ***")
			order = jQuery('input:radio[name="order"]:checked').val()
			jQuery('#outarea_cc').text(order)
			show_table_proc(data_aa,order)
			})
		})



	jQuery("#outarea_hh").text ("*** storytelling *** end ***")

})

// -----------------------------------------------------------------------
function display_information()
{
	var file_in = "./information.txt"

	jQuery.get (file_in,function (data_aa)
		{
		var str_out = ""
		str_out += data_aa
		jQuery(".information").html (str_out)
		})
}

// -----------------------------------------------------------------------
// [4]:
function show_table_proc(data_aa,order)
{
	const array_aa = data_sort_proc(data_aa,order)

	const day_last_year =  get_before_two_years_proc ()
	const dd_last = Date.parse(day_last_year)

	var str_out = ""
	str_out += "<table>"
	str_out += "<tr>"
	str_out += "<th>No</th>"
	str_out += "<th>Title</th>"
	str_out += "<th>Text</th>"
	str_out += "<th>Khm</th>"
	str_out += "<th>Deutsch</th>"
	str_out += "<th>Pages</th>"
	str_out += "<th>Told</th>"
	str_out += "<th>At</th>"
	str_out += "</tr>"

	var icount = 0
	for (var it in array_aa)
		{
		const key = array_aa[it]["key"]
		const unit_aa = array_aa[it]["value"]
		str_out += "<tr>"
		str_out += "<td>" + key + "</td>"
		str_out += "<td>" + unit_aa.title + "</td>"
		str_out += "<td>" + unit_aa.text + "</td>"
		str_out += "<td>" + unit_aa.khm + "</td>"
		str_out += "<td>" + unit_aa.de + "</td>"
		str_out += "<td>" + unit_aa.pages + "</td>"

		const ddx = Date.parse(unit_aa.told)
		if (ddx <= dd_last)
			{
			str_out += "<td class=red>"
			}
		else
			{
			str_out += "<td>"
			}

		str_out += unit_aa.told + "</td>"
		str_out += "<td>" + unit_aa.at + "</td>"
		str_out += "</tr>"
		}

	str_out += "</table>"

	jQuery(".contents").html (str_out)
}

// -----------------------------------------------------------------------
// [4-4]:
function data_sort_proc(data_aa,order)
{
	var array_aa = new Array()

	for(var it in data_aa)
		{
		array_aa.push({'key':String (it), 'value':data_aa[it]})
		}

	if (order == "register")
		{
		array_aa.sort(compare_by_key_proc)
		}
	else
		{
		array_aa.sort(compare_by_told_proc)
		}

	return array_aa
}
 
// -----------------------------------------------------------------------
// [4-4-2]:
function compare_by_key_proc (left,right)
{
	var aa = left.key
	var bb = right.key

	var rvalue = 0

	if (aa < bb)
		{
		rvalue = -1
		}
	else if (aa > bb)
		{
		rvalue = 1
		}

	return	rvalue
}

// -----------------------------------------------------------------------
// [4-4-4]:
function compare_by_told_proc (left,right)
{
	const aa = Date.parse(left.value.told)
	const bb = Date.parse(right.value.told)

	var rvalue = 0

	if (aa < bb)
		{
		rvalue = -1
		}
	else if (aa > bb)
		{
		rvalue = 1
		}

	return	rvalue
}

// -----------------------------------------------------------------------
// [4-6]:
function get_before_two_years_proc ()
{
	const today = new Date ()
	var ddx = (1900 + today.getYear () - 2) + "-" + (today.getMonth () +1)
	ddx += "-" + today.getDate ()

	return ddx
}

// -----------------------------------------------------------------------
