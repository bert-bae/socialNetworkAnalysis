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

function listPeople() {
  for (var user in data) {
    console.log(data[user].name + " follows " + listFollowing(user).join(", ").replace(/,([^,]*)$/, ' and$1') + " and is followed by " + listFollowers(user).join(", ").replace(/,([^,]*)$/, ' and$1'));
  }
}
// listPeople();

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
// followMost();

function mostFollowers() {
  var followersObj = {};
  for (var user in data) {
    for (var follow in data[user].follows) {
      if (followersObj.hasOwnProperty(data[user].follows[follow])) {
        followersObj[data[user].follows[follow]] += 1;
      } else {
        followersObj[data[user].follows[follow]] = 1;
      }
    }
  }
  var userObj = {
    name: "",
    numFollowers: 0
  };
  for (var userId in followersObj) {
    if (followersObj[userId] > userObj.numFollowers) {
      userObj.name = data[userId].name;
      userObj.numFollowers = followersObj[userId];
    } else if (followersObj[userId] === userObj.numFollowers) {
      userObj.name += ", " + data[userId].name;
    }
  }
  console.log(userObj.name + " has/have the most followers at " + userObj.numFollowers + ".");
}
// mostFollowers();

function mostFollowersOver30() {
  var followersObj = {};
  for (var user in data) {
    if (data[user].age > 30) {
      for (var follow in data[user].follows) {
        if (followersObj.hasOwnProperty(data[user].follows[follow])) {
          followersObj[data[user].follows[follow]] += 1;
        } else {
          followersObj[data[user].follows[follow]] = 1;
        }
      }
    }
  }
  var userObj = {
    name: "",
    numFollowers: 0
  };
  for (var userId in followersObj) {
    if (followersObj[userId] > userObj.numFollowers) {
      userObj.name = data[userId].name;
      userObj.numFollowers = followersObj[userId];
    } else if (followersObj[userId] === userObj.numFollowers) {
      userObj.name += ", " + data[userId].name;
    }
  }
  console.log(userObj.name + " has/have the most followers over 30 at " + userObj.numFollowers + ".");
}
// mostFollowersOver30();

function mostFollowsOver30() {
  var followsObj = {};
  for (var user in data) {
    for (var follow in data[user].follows) {
      if (data[data[user].follows[follow]].age > 30) {
        if (followsObj.hasOwnProperty(user)) {
          followsObj[user] += 1;
        } else {
          followsObj[user] = 1;
        }
      }
    }
  }
  var userObj = {
    name: "",
    numFollows: 0
  };
  for (var userId in followsObj) {
    if (userObj.numFollows < followsObj[userId]) {
      userObj.name = data[userId].name;
      userObj.numFollows = followsObj[userId];
    } else if (userObj.numFollows === followsObj[userId]) {
      userObj.name += ", " + data[userId].name;
    }
  }
  console.log(userObj.name + " follow the most people over thirty at " + userObj.numFollows + ".");
}
// mostFollowsOver30();

function followNotFollow() {
  for (var user in data) {
    for (var follow in data[user].follows) {
      if (data[data[user].follows[follow]].follows.indexOf(user) === -1) {
        console.log(data[user].name + " follows " + data[data[user].follows[follow]].name + " , but is not followed back by " + data[data[user].follows[follow]].name + ".");
      }
    }
  }
}
// followNotFollow();

  // f01: {
  //   name: "Alice",
  //   age: 15,
  //   follows: ["f02", "f03", "f04"]
  // },
  // f02: {
  //   name: "Bob",
  //   age: 20,
  //   follows: ["f05", "f06"]
  // },
  // f03: {
  //   name: "Charlie",
  //   age: 35,
  //   follows: ["f01", "f04", "f06"]
  // },
  // f04: {
  //   name: "Debbie",
  //   age: 40,
  //   follows: ["f01", "f02", "f03", "f05", "f06"]
  // },
  // f05: {
  //   name: "Elizabeth",
  //   age: 45,
  //   follows: ["f04"]
  // },
  // f06: {
  //   name: "Finn",
  //   age: 25,
  //   follows: ["f05"]
  // }


// List everyone and for each of them, list the names of who they follow and who follows them
// Identify who follows the most people
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)
