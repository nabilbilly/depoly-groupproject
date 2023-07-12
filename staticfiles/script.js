
function generateGroups() {
    var numberGroups = parseInt(document.getElementById("number-groups").value);
    var numGroupMembers = parseInt(document.getElementById("num-group-members").value);
    var members = [];

    for (var i = 1; i <= numGroupMembers; i++) {
        var memberFullName = prompt("Enter member " + i + " fullname:");
        members.push(memberFullName);
    }

    var membersPerGroup = Math.floor(numGroupMembers / numberGroups);
    var orgGroups = [];

    for (var j = 0; j < numberGroups; j++) {
        var group = [];
        for (var k = 0; k < membersPerGroup; k++) {
            if (members.length > 0) {
                var randomMember = members[Math.floor(Math.random() * members.length)];
                group.push(randomMember);
                members.splice(members.indexOf(randomMember), 1);
            }
        }
        orgGroups.push(group);
    }

    var output = "";
    for (var g = 0; g < orgGroups.length; g++) {
        output += "Group " + (g + 1) + ": " + orgGroups[g].join(", ") + "<br>";
    }

    output += "Remaining members: " + members.join(", ");
    document.getElementById("groups-output").innerHTML = output;
}