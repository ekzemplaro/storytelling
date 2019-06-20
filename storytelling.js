// -----------------------------------------------------------------------
//	storytelling.js
//
//					Feb/25/2019
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** storytelling *** start ***")

	display_information()

	var file_in = "./source.json"

	jQuery.getJSON (file_in,function (data_aa)
		{
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
		str_out += "</tr>"
		var icount = 0
		for (var key in data_aa)
			{
			const unit_aa = data_aa[key]
			str_out += "<tr>"
			str_out += "<td>" + key + "</td>"
			str_out += "<td>" + unit_aa.title + "</td>"
			str_out += "<td>" + unit_aa.text + "</td>"
			str_out += "<td>" + unit_aa.khm + "</td>"
			str_out += "<td>" + unit_aa.de + "</td>"
			str_out += "<td>" + unit_aa.pages + "</td>"
			str_out += "<td>" + unit_aa.told + "</td>"
			str_out += "</tr>"
			}

		str_out += "</table>"

		jQuery(".contents").html (str_out)
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
