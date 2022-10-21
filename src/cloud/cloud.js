Moralis.Cloud.define("cloudQuery", async (request) => {

  console.log("Hello")

});

Moralis.Cloud.define("averageStars", async (request) => {
  const query = new Moralis.Query("Monster");
  query.equalTo("ownerName", request.params.owner);
  const results = await query.find();
  return results
});