// Code your solution here

// ✅ findMatching function
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }
  
  // ✅ fuzzyMatch function
  function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
  }
  
  // ✅ matchName function
  function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
  }
  
  // ✅ Example usage for testing
  const drivers = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "Sammy", hometown: "New York" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "Tampa Bay" }
  ];
  
  // Example test cases
  console.log(findMatching(["Bobby", "Sammy", "Sally", "Annette"], "bobby")); 
  // Output: ["Bobby"]
  
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette"], "Sa")); 
  // Output: ["Sammy", "Sally"]
  
  console.log(matchName(drivers, "Bobby")); 
  // Output: [{ name: "Bobby", hometown: "Pittsburgh" }, { name: "Bobby", hometown: "Tampa Bay" }]
  