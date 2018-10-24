var _ = require('underscore');

var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function listPeople() {
  for (var user in data) {
    console.log(data[user].name + " follows " + listFollowing(user).join(", ").replace(/,([^,]*)$/, ' and$1') + " and is followed by " + listFollowers(user).join(", ").replace(/,([^,]*)$/, ' and$1'));
  }
}
// listPeople();

function listFollowing(userId) {
  var result = [];
  for (var follower in data[userId].follows) {
    result.push(data[data[userId].follows[follower]].name);
  }
  return result;
}
// console.log(listFollowing("f02"));

function listFollowers(userId) {
  var result = [];
  for (var user in data) {
    if (data[user].follows.indexOf(userId) !== -1) {
      result.push(data[user].name);
    }
  }
  return result;
}
// listFollowers("f02");

function followMost() {
  var userObj = {
    name: "",
    numFollows: 0
  };
  for (var user in data) {
    if (data[user].follows.length > userObj.numFollows) {
      userObj.numFollows = data[user].follows.length;
      userObj.name = data[user].name;
    }
  }
  console.log(userObj.name + " follows the most people with " + userObj.numFollows + ".");
}
followMost();

// List everyone and for each of them, list the names of who they follow and who follows them
// Identify who follows the most people
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)
