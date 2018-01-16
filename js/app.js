// Find the person
var person = null;
var listOfEventType = [{"id":1,"name":"Bowling"},{"id":2,"name":"Community Service"},{"id":3,"name":"Concerts"},{"id":4,"name":"Drawing\/Painting"},{"id":5,"name":"Family Group"},{"id":6,"name":"Golf"},{"id":7,"name":"Hiking"},{"id":8,"name":"Lectures"},{"id":9,"name":"Mini-golf"},{"id":10,"name":"Movies"},{"id":11,"name":"Other Crafts"},{"id":12,"name":"Retirees"},{"id":13,"name":"Rock Climbing"},{"id":14,"name":"Roleplaying Games"},{"id":15,"name":"Social Boardgames"},{"id":16,"name":"Tennis"},{"id":17,"name":"Theater"},{"id":18,"name":"Yarn Crafts"}];
var eventTypes = {};
var listOfLocation = [{"id":1,"area":"Central"},{"id":2,"area":"Desert"},{"id":3,"area":"North\/Central"},{"id":4,"area":"Northeast IE"},{"id":5,"area":"Northwest IE"},{"id":6,"area":"South\/West IE"},{"id":7,"area":"Victorville"}];
var locations = {};
var listOfPerson = [{"id":1,"person_name":"Angelica","location_id":3},{"id":3,"person_name":"Anna M.","location_id":6},{"id":4,"person_name":"Bruce M.","location_id":1},{"id":5,"person_name":"Caia C.","location_id":5},{"id":6,"person_name":"Carol B.","location_id":4},{"id":7,"person_name":"Cerise","location_id":4},{"id":8,"person_name":"Charlene","location_id":1},{"id":9,"person_name":"Charles P.","location_id":3},{"id":11,"person_name":"Chris L.","location_id":5},{"id":12,"person_name":"Christina (Rialto)","location_id":3},{"id":13,"person_name":"Christina (Riverside)","location_id":1},{"id":14,"person_name":"Crystal E.","location_id":1},{"id":15,"person_name":"Dave","location_id":1},{"id":16,"person_name":"Deb","location_id":6},{"id":17,"person_name":"Dorothy","location_id":1},{"id":18,"person_name":"Emily","location_id":1},{"id":19,"person_name":"Erin M.","location_id":2},{"id":20,"person_name":"Esther H.","location_id":1},{"id":21,"person_name":"Geoffrey","location_id":6},{"id":22,"person_name":"Jennifer C.","location_id":4},{"id":23,"person_name":"Joan","location_id":4},{"id":24,"person_name":"Joe L.","location_id":4},{"id":25,"person_name":"John","location_id":1},{"id":26,"person_name":"Kara","location_id":4},{"id":27,"person_name":"Karen D.","location_id":3},{"id":28,"person_name":"Kathy","location_id":1},{"id":29,"person_name":"Kenneth B.","location_id":4},{"id":30,"person_name":"Lan","location_id":4},{"id":31,"person_name":"Laurel H.","location_id":4},{"id":32,"person_name":"Leslie J.","location_id":1},{"id":33,"person_name":"LJ F.","location_id":4},{"id":34,"person_name":"Max","location_id":1},{"id":35,"person_name":"Melika","location_id":5},{"id":36,"person_name":"Michael","location_id":5},{"id":37,"person_name":"Mike","location_id":1},{"id":38,"person_name":"Monica M.","location_id":6},{"id":39,"person_name":"Nancy Jackson B.","location_id":2},{"id":40,"person_name":"Nancy S.","location_id":4},{"id":41,"person_name":"Nicholas M.","location_id":5},{"id":42,"person_name":"Nick","location_id":5},{"id":43,"person_name":"Reb","location_id":1},{"id":44,"person_name":"Rebecca S.","location_id":4},{"id":45,"person_name":"Richard D.","location_id":1},{"id":46,"person_name":"Rita B.","location_id":4},{"id":47,"person_name":"Susan","location_id":7},{"id":48,"person_name":"Ted C.","location_id":6},{"id":49,"person_name":"Tyler Z.","location_id":5}];
var people = {};
var listOfSmallGroup = [{"id":1,"event_type_id":5,"person_id":20,"location_id":1},{"id":2,"event_type_id":5,"person_id":32,"location_id":1},{"id":3,"event_type_id":10,"person_id":6,"location_id":4},{"id":4,"event_type_id":10,"person_id":40,"location_id":4},{"id":6,"event_type_id":5,"person_id":14,"location_id":1},{"id":7,"event_type_id":5,"person_id":22,"location_id":4},{"id":8,"event_type_id":5,"person_id":31,"location_id":4},{"id":9,"event_type_id":5,"person_id":1,"location_id":3},{"id":10,"event_type_id":12,"person_id":33,"location_id":4},{"id":11,"event_type_id":12,"person_id":24,"location_id":4},{"id":12,"event_type_id":12,"person_id":39,"location_id":2},{"id":13,"event_type_id":12,"person_id":47,"location_id":7},{"id":14,"event_type_id":12,"person_id":23,"location_id":4},{"id":15,"event_type_id":12,"person_id":4,"location_id":1},{"id":16,"event_type_id":10,"person_id":39,"location_id":2},{"id":17,"event_type_id":10,"person_id":19,"location_id":2},{"id":18,"event_type_id":10,"person_id":31,"location_id":4},{"id":19,"event_type_id":10,"person_id":22,"location_id":4},{"id":20,"event_type_id":10,"person_id":26,"location_id":4},{"id":21,"event_type_id":10,"person_id":38,"location_id":6},{"id":22,"event_type_id":10,"person_id":48,"location_id":6},{"id":23,"event_type_id":10,"person_id":3,"location_id":6},{"id":24,"event_type_id":10,"person_id":21,"location_id":6},{"id":25,"event_type_id":10,"person_id":16,"location_id":6},{"id":26,"event_type_id":10,"person_id":44,"location_id":4},{"id":27,"event_type_id":10,"person_id":46,"location_id":4},{"id":28,"event_type_id":10,"person_id":7,"location_id":4},{"id":29,"event_type_id":10,"person_id":23,"location_id":4},{"id":30,"event_type_id":10,"person_id":18,"location_id":1},{"id":31,"event_type_id":10,"person_id":37,"location_id":1},{"id":32,"event_type_id":10,"person_id":28,"location_id":1},{"id":33,"event_type_id":10,"person_id":32,"location_id":1},{"id":34,"event_type_id":10,"person_id":13,"location_id":1},{"id":35,"event_type_id":10,"person_id":15,"location_id":1},{"id":36,"event_type_id":10,"person_id":43,"location_id":1},{"id":37,"event_type_id":10,"person_id":17,"location_id":1},{"id":38,"event_type_id":10,"person_id":4,"location_id":1},{"id":39,"event_type_id":10,"person_id":25,"location_id":1},{"id":40,"event_type_id":10,"person_id":49,"location_id":5},{"id":41,"event_type_id":10,"person_id":36,"location_id":5},{"id":42,"event_type_id":10,"person_id":41,"location_id":5},{"id":43,"event_type_id":10,"person_id":42,"location_id":5},{"id":44,"event_type_id":10,"person_id":35,"location_id":5},{"id":45,"event_type_id":10,"person_id":5,"location_id":5},{"id":46,"event_type_id":10,"person_id":1,"location_id":3},{"id":47,"event_type_id":10,"person_id":9,"location_id":3},{"id":48,"event_type_id":17,"person_id":44,"location_id":4},{"id":49,"event_type_id":17,"person_id":19,"location_id":2},{"id":50,"event_type_id":17,"person_id":22,"location_id":4},{"id":51,"event_type_id":17,"person_id":39,"location_id":2},{"id":52,"event_type_id":17,"person_id":41,"location_id":5},{"id":53,"event_type_id":17,"person_id":1,"location_id":3},{"id":54,"event_type_id":17,"person_id":42,"location_id":5},{"id":55,"event_type_id":17,"person_id":9,"location_id":3},{"id":56,"event_type_id":17,"person_id":43,"location_id":1},{"id":57,"event_type_id":17,"person_id":8,"location_id":1},{"id":58,"event_type_id":17,"person_id":21,"location_id":6},{"id":59,"event_type_id":17,"person_id":17,"location_id":1},{"id":60,"event_type_id":17,"person_id":25,"location_id":1},{"id":61,"event_type_id":17,"person_id":37,"location_id":1},{"id":62,"event_type_id":3,"person_id":25,"location_id":1},{"id":63,"event_type_id":3,"person_id":8,"location_id":1},{"id":64,"event_type_id":3,"person_id":17,"location_id":1},{"id":65,"event_type_id":3,"person_id":4,"location_id":1},{"id":66,"event_type_id":3,"person_id":21,"location_id":6},{"id":67,"event_type_id":3,"person_id":41,"location_id":5},{"id":68,"event_type_id":3,"person_id":1,"location_id":3},{"id":69,"event_type_id":3,"person_id":22,"location_id":4},{"id":70,"event_type_id":3,"person_id":42,"location_id":5},{"id":71,"event_type_id":3,"person_id":44,"location_id":4},{"id":72,"event_type_id":8,"person_id":30,"location_id":4},{"id":73,"event_type_id":8,"person_id":12,"location_id":3},{"id":74,"event_type_id":8,"person_id":42,"location_id":5},{"id":75,"event_type_id":8,"person_id":31,"location_id":4},{"id":76,"event_type_id":8,"person_id":41,"location_id":5},{"id":77,"event_type_id":8,"person_id":39,"location_id":2},{"id":78,"event_type_id":8,"person_id":19,"location_id":2},{"id":79,"event_type_id":8,"person_id":20,"location_id":1},{"id":80,"event_type_id":8,"person_id":21,"location_id":6},{"id":81,"event_type_id":8,"person_id":3,"location_id":6},{"id":82,"event_type_id":8,"person_id":25,"location_id":1},{"id":83,"event_type_id":8,"person_id":48,"location_id":6},{"id":84,"event_type_id":15,"person_id":36,"location_id":5},{"id":85,"event_type_id":15,"person_id":11,"location_id":5},{"id":86,"event_type_id":15,"person_id":41,"location_id":5},{"id":87,"event_type_id":15,"person_id":42,"location_id":5},{"id":88,"event_type_id":15,"person_id":35,"location_id":5},{"id":89,"event_type_id":15,"person_id":5,"location_id":5},{"id":90,"event_type_id":15,"person_id":1,"location_id":3},{"id":91,"event_type_id":15,"person_id":12,"location_id":3},{"id":92,"event_type_id":15,"person_id":27,"location_id":3},{"id":93,"event_type_id":15,"person_id":9,"location_id":3},{"id":94,"event_type_id":15,"person_id":7,"location_id":4},{"id":95,"event_type_id":15,"person_id":44,"location_id":4},{"id":96,"event_type_id":15,"person_id":46,"location_id":4},{"id":97,"event_type_id":15,"person_id":23,"location_id":4},{"id":98,"event_type_id":15,"person_id":26,"location_id":4},{"id":99,"event_type_id":15,"person_id":48,"location_id":6},{"id":100,"event_type_id":15,"person_id":16,"location_id":6},{"id":101,"event_type_id":15,"person_id":38,"location_id":6},{"id":102,"event_type_id":15,"person_id":20,"location_id":1},{"id":103,"event_type_id":15,"person_id":14,"location_id":1},{"id":104,"event_type_id":15,"person_id":8,"location_id":1},{"id":105,"event_type_id":15,"person_id":28,"location_id":1},{"id":106,"event_type_id":15,"person_id":18,"location_id":1},{"id":107,"event_type_id":15,"person_id":15,"location_id":1},{"id":108,"event_type_id":14,"person_id":6,"location_id":4},{"id":109,"event_type_id":14,"person_id":32,"location_id":1},{"id":110,"event_type_id":14,"person_id":45,"location_id":1},{"id":111,"event_type_id":14,"person_id":21,"location_id":6},{"id":112,"event_type_id":14,"person_id":3,"location_id":6},{"id":113,"event_type_id":14,"person_id":31,"location_id":4},{"id":114,"event_type_id":14,"person_id":19,"location_id":2},{"id":115,"event_type_id":1,"person_id":42,"location_id":5},{"id":116,"event_type_id":1,"person_id":26,"location_id":4},{"id":117,"event_type_id":1,"person_id":12,"location_id":3},{"id":118,"event_type_id":1,"person_id":46,"location_id":4},{"id":119,"event_type_id":1,"person_id":16,"location_id":6},{"id":120,"event_type_id":1,"person_id":25,"location_id":1},{"id":121,"event_type_id":1,"person_id":15,"location_id":1},{"id":122,"event_type_id":1,"person_id":34,"location_id":1},{"id":123,"event_type_id":1,"person_id":17,"location_id":1},{"id":124,"event_type_id":9,"person_id":9,"location_id":3},{"id":125,"event_type_id":9,"person_id":46,"location_id":4},{"id":126,"event_type_id":9,"person_id":41,"location_id":5},{"id":127,"event_type_id":9,"person_id":12,"location_id":3},{"id":128,"event_type_id":9,"person_id":35,"location_id":5},{"id":129,"event_type_id":9,"person_id":5,"location_id":5},{"id":130,"event_type_id":9,"person_id":25,"location_id":1},{"id":131,"event_type_id":9,"person_id":15,"location_id":1},{"id":132,"event_type_id":9,"person_id":38,"location_id":6},{"id":133,"event_type_id":6,"person_id":42,"location_id":5},{"id":134,"event_type_id":6,"person_id":26,"location_id":4},{"id":135,"event_type_id":6,"person_id":24,"location_id":4},{"id":136,"event_type_id":6,"person_id":5,"location_id":5},{"id":137,"event_type_id":16,"person_id":42,"location_id":5},{"id":138,"event_type_id":16,"person_id":18,"location_id":1},{"id":139,"event_type_id":16,"person_id":7,"location_id":4},{"id":140,"event_type_id":16,"person_id":16,"location_id":6},{"id":141,"event_type_id":16,"person_id":35,"location_id":5},{"id":142,"event_type_id":13,"person_id":5,"location_id":5},{"id":143,"event_type_id":13,"person_id":42,"location_id":5},{"id":144,"event_type_id":2,"person_id":39,"location_id":2},{"id":145,"event_type_id":2,"person_id":19,"location_id":2},{"id":146,"event_type_id":2,"person_id":6,"location_id":4},{"id":147,"event_type_id":2,"person_id":7,"location_id":4},{"id":148,"event_type_id":2,"person_id":40,"location_id":4},{"id":149,"event_type_id":2,"person_id":16,"location_id":6},{"id":150,"event_type_id":2,"person_id":21,"location_id":6},{"id":151,"event_type_id":2,"person_id":38,"location_id":6},{"id":152,"event_type_id":2,"person_id":48,"location_id":6},{"id":153,"event_type_id":2,"person_id":36,"location_id":5},{"id":154,"event_type_id":2,"person_id":41,"location_id":5},{"id":155,"event_type_id":2,"person_id":35,"location_id":5},{"id":156,"event_type_id":2,"person_id":42,"location_id":5},{"id":157,"event_type_id":2,"person_id":5,"location_id":5},{"id":158,"event_type_id":2,"person_id":14,"location_id":1},{"id":159,"event_type_id":2,"person_id":25,"location_id":1},{"id":160,"event_type_id":2,"person_id":37,"location_id":1},{"id":161,"event_type_id":2,"person_id":45,"location_id":1},{"id":162,"event_type_id":2,"person_id":32,"location_id":1},{"id":163,"event_type_id":2,"person_id":20,"location_id":1},{"id":164,"event_type_id":2,"person_id":15,"location_id":1},{"id":165,"event_type_id":7,"person_id":3,"location_id":6},{"id":166,"event_type_id":7,"person_id":48,"location_id":6},{"id":167,"event_type_id":7,"person_id":21,"location_id":6},{"id":168,"event_type_id":7,"person_id":38,"location_id":6},{"id":169,"event_type_id":7,"person_id":35,"location_id":5},{"id":170,"event_type_id":7,"person_id":5,"location_id":5},{"id":171,"event_type_id":7,"person_id":41,"location_id":5},{"id":172,"event_type_id":7,"person_id":42,"location_id":5},{"id":173,"event_type_id":7,"person_id":36,"location_id":5},{"id":174,"event_type_id":7,"person_id":49,"location_id":5},{"id":175,"event_type_id":7,"person_id":1,"location_id":3},{"id":176,"event_type_id":7,"person_id":12,"location_id":3},{"id":177,"event_type_id":7,"person_id":31,"location_id":4},{"id":178,"event_type_id":7,"person_id":22,"location_id":4},{"id":179,"event_type_id":7,"person_id":30,"location_id":4},{"id":180,"event_type_id":7,"person_id":23,"location_id":4},{"id":181,"event_type_id":7,"person_id":26,"location_id":4},{"id":182,"event_type_id":7,"person_id":33,"location_id":4},{"id":183,"event_type_id":7,"person_id":6,"location_id":4},{"id":184,"event_type_id":7,"person_id":25,"location_id":1},{"id":185,"event_type_id":7,"person_id":34,"location_id":1},{"id":186,"event_type_id":7,"person_id":13,"location_id":1},{"id":187,"event_type_id":7,"person_id":17,"location_id":1},{"id":188,"event_type_id":7,"person_id":37,"location_id":1},{"id":189,"event_type_id":7,"person_id":20,"location_id":1},{"id":190,"event_type_id":4,"person_id":39,"location_id":2},{"id":191,"event_type_id":4,"person_id":19,"location_id":2},{"id":192,"event_type_id":4,"person_id":29,"location_id":4},{"id":193,"event_type_id":4,"person_id":33,"location_id":4},{"id":194,"event_type_id":4,"person_id":26,"location_id":4},{"id":195,"event_type_id":4,"person_id":31,"location_id":4},{"id":196,"event_type_id":4,"person_id":6,"location_id":4},{"id":197,"event_type_id":4,"person_id":44,"location_id":4},{"id":198,"event_type_id":4,"person_id":23,"location_id":4},{"id":199,"event_type_id":4,"person_id":46,"location_id":4},{"id":200,"event_type_id":4,"person_id":22,"location_id":4},{"id":201,"event_type_id":4,"person_id":35,"location_id":5},{"id":202,"event_type_id":4,"person_id":41,"location_id":5},{"id":203,"event_type_id":4,"person_id":16,"location_id":6},{"id":204,"event_type_id":4,"person_id":25,"location_id":1},{"id":205,"event_type_id":4,"person_id":13,"location_id":1},{"id":206,"event_type_id":4,"person_id":28,"location_id":1},{"id":207,"event_type_id":4,"person_id":20,"location_id":1},{"id":208,"event_type_id":4,"person_id":14,"location_id":1},{"id":209,"event_type_id":4,"person_id":43,"location_id":1},{"id":210,"event_type_id":4,"person_id":8,"location_id":1},{"id":211,"event_type_id":4,"person_id":18,"location_id":1},{"id":212,"event_type_id":18,"person_id":5,"location_id":5},{"id":213,"event_type_id":18,"person_id":28,"location_id":1},{"id":214,"event_type_id":18,"person_id":20,"location_id":1},{"id":215,"event_type_id":18,"person_id":16,"location_id":6},{"id":216,"event_type_id":18,"person_id":46,"location_id":4},{"id":217,"event_type_id":18,"person_id":6,"location_id":4},{"id":218,"event_type_id":18,"person_id":26,"location_id":4},{"id":219,"event_type_id":18,"person_id":39,"location_id":2},{"id":220,"event_type_id":18,"person_id":19,"location_id":2},{"id":221,"event_type_id":11,"person_id":31,"location_id":4},{"id":222,"event_type_id":11,"person_id":19,"location_id":2},{"id":223,"event_type_id":11,"person_id":35,"location_id":5},{"id":224,"event_type_id":11,"person_id":22,"location_id":4},{"id":225,"event_type_id":11,"person_id":23,"location_id":4},{"id":226,"event_type_id":11,"person_id":26,"location_id":4},{"id":227,"event_type_id":11,"person_id":6,"location_id":4},{"id":228,"event_type_id":11,"person_id":46,"location_id":4},{"id":229,"event_type_id":11,"person_id":5,"location_id":5},{"id":230,"event_type_id":11,"person_id":39,"location_id":2},{"id":231,"event_type_id":11,"person_id":28,"location_id":1}];
var listOfCategory = {};

function initColor(r) {
    r[0].color="#007FFF",r[1].color="#A142FF",r[2].color="#FF85C2",r[3].color="#FFA142",r[4].color="#FF4242";
	for (var o=5;o<r.length;o++) {
	    var t=d3.color(r[o%4+1].color);r[o].color=t.brighter(1.5).toString()
	}
}

function initRadius(r){r[0].radius=18,r[1].radius=14,r[2].radius=14,r[3].radius=14,r[4].radius=14;for(var o=5;o<r.length;o++)r[o].radius=10}

$("#person_entry").keypress(function (e) {
	var keycode = (e.keyCode ? e.keyCode : e.which);
	if (keycode == '13') {
		nameSearch();
	}
});
$("#person_entry_submit").on('click', nameSearch);
	
function nameSearch() {
	var name_entered = $("#person_entry").val();
	
	$.each(listOfPerson, function (index, person_object) {
		if (person_object.person_name == name_entered) {
            person = person_object;
			listOfCategory = {};
			listOfCategory[person.id] = {};
		} else if ((person_object.person_name.indexOf(name_entered) != -1) && (person == null)) {
			person = person_object;
			listOfCategory = {};
			listOfCategory[person.id] = {};
		}
	});
	
	// Find the location of the selected person
	listOfCategory[person.id][locations[person.location_id].area] = {};

	// Find all people in the same area of the selected person
	$.each(listOfPerson, function( index, person_object ) {
		if ((person_object.id != person.id) && (person_object.location_id == person.location_id)) {
			listOfCategory[person.id][locations[person.location_id].area][person_object.person_name] = {};
		}
	});

	// Find the small group event types for the selected person
	$.each(listOfSmallGroup, function( index, small_group ) {
		if (small_group.person_id == person.id) {
			listOfCategory[person.id][eventTypes[small_group.event_type_id].name] = {};
			listOfCategory[person.id][eventTypes[small_group.event_type_id].name][locations[small_group.location_id].area] = {};
		};
	});

	// Find the locations of the small groups for the selected person, and create a sub-category for the matching people
	$.each(listOfSmallGroup, function( index, small_group ) {
		//if ((small_group.location_id == person.location_id) && (listOfCategory[person.id].hasOwnProperty(eventTypes[small_group.event_type_id].name)) && (small_group.person_id != person.id)) {
			//listOfCategory[person.id][eventTypes[small_group.event_type_id].name][locations[small_group.location_id].area][people[small_group.person_id].person_name] = {};
		//};
		
		if ((listOfCategory[person.id].hasOwnProperty(eventTypes[small_group.event_type_id].name)) && (small_group.person_id != person.id)) {
			if (!listOfCategory[person.id][eventTypes[small_group.event_type_id].name].hasOwnProperty(locations[small_group.location_id].area)) {
				listOfCategory[person.id][eventTypes[small_group.event_type_id].name][locations[small_group.location_id].area] = {};
			}
			
			listOfCategory[person.id][eventTypes[small_group.event_type_id].name][locations[small_group.location_id].area][people[small_group.person_id].person_name] = {};
		}
	});

	// Setup D3 relationship nodes
	var listOfNodes = [];
	var listOfRelationships = [];

	listOfNodes.push( { id: "P." + person.id, name: person.person_name } ); 
	addNodes(person.id, listOfCategory, 1, "P", "P." + person.id);

	// Recursive function to create nodes and relationships (graph) of people/events/locations
	function addNodes(source_key, traverse_object, depth, prefix, parent_id) {
		Object.keys(traverse_object[source_key]).forEach(function(key,index) {
			var node_id = prefix + "." + source_key + "." + depth + "." + key;
			listOfNodes.push( { id: node_id, name: key } ); 
			listOfRelationships.push( { source: parent_id, target: node_id } );
			
			if (Object.keys(traverse_object[source_key][key]).length > 0) {
				addNodes(key, traverse_object[source_key], depth + 1, prefix + "." + source_key + "." + depth, node_id);
			}
		});
	}

	initColor(listOfNodes),initRadius(listOfNodes);

	var canvas = document.querySelector("canvas"),
	width=1300,
	height=1300;

	var s = new relation;
	s.setNodes(listOfNodes),
	s.setLinks(listOfRelationships),
	s.setCanvas(canvas),
	s.setSize(width,height),
	s.setRadius(12),
	s.setLinkLength(90),
	s.setCharge(-60),
	s.init(),
	s.run();
};

// Pre-processing to make the Event Types easy to work with
$.each(listOfEventType, function( index, event_type ) {
	eventTypes[event_type.id] = event_type;
});

// Pre-processing to make location easy to work with
$.each(listOfLocation, function( index, location_ie ) {
	locations[location_ie.id] = location_ie;
});

// Pre-processing to make people easy to work with
$.each(listOfPerson, function( index, person_object ) {
  people[person_object.id] = person_object;
});
	
function relation() {
	var a,b,c,d,e,f="id",g=15,h=600,i=600,j=-30,k=20,l=2;
	this.init = function() {
		c=d3.forceSimulation()
		    .force("charge",d3.forceManyBody()
			.strength(j))
			.force("center",d3.forceCenter(h/2,i/2))
			.force("collide",d3.forceCollide(1.2*g)),
		c.nodes(a).on("tick",this.render),
		c.force("link",d3.forceLink().links(b).id(function(a){return a[f]}).distance(k)),
		this.initDrag(),
		e=d.getContext("2d"),
		this.restart(),
		this.pause()},
		this.render=function() {
			e.clearRect(0,0,h,i),
			e.lineWidth=l,
			e.strokeStyle="black",
			e.beginPath(),
			b.forEach(function(a) {
				e.moveTo(a.source.x,a.source.y),
				e.lineTo(a.target.x,a.target.y)}),
				e.stroke(),
				e.lineWidth=3,
				e.strokeStyle="black",
				a.forEach(function(a) {
					e.fillStyle=a.color,
					e.beginPath(),
					e.arc(a.x,a.y,a.radius,0,2*Math.PI),
					e.fill(),
					e.stroke()
				}),
				e.font="14px Comic Sans MS",
				e.fillStyle="black",
				e.textAlign="center",
				a.forEach(function(a) {
					e.fillText(a.name,a.x,a.y+2.5*a.radius)
				})
		},
		this.initDrag=function() {
			function a() {
				return c.find(d3.event.x,d3.event.y)
			}
			function b() {
				d3.event.active||c.alphaTarget(.3).restart(),
				d3.event.subject.fx=d3.event.subject.x,
				d3.event.subject.fy=d3.event.subject.y
			}
			function e() {
				d3.event.subject.fx=d3.event.x,
				d3.event.subject.fy=d3.event.y
			}
			function f() {
				d3.event.active||c.alphaTarget(0),
				d3.event.subject.fx=null,
				d3.event.subject.fy=null
			}
			d3.select(d).call(d3.drag().container(d).subject(a).on("start",b).on("drag",e).on("end",f))
		},
		this.pause = function() {
			c.stop()
		},
		this.run = function() {
			c.restart()
		},
		this.restart = function() {
			c.alpha(1),
			this.run()
		},
		this.setNodes = function(b) { a=b },
		this.setLinks = function(a) { b=a },
		this.setId = function(a) {f=a},
		this.setRadius = function(a) {g=a},
		this.setCanvas = function(a) {d=a},
		this.setSize = function(a,b) {h=a,i=b},
		this.setCharge = function(a) {j=a},
		this.setLinkLength = function(a) {k=a}
}