function Update()
{
    var images =
[
    "https://static.toiimg.com/thumb/69251964.cms?width=680&height=512&imgsize=298724", 
    "https://cdn1.byjus.com/wp-content/uploads/2019/10/my-father-essay-for-class-1.jpeg", 
    "https://i.pinimg.com/564x/5d/8a/02/5d8a0216591fe27000157bfe9d45b38e.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsXTnxfLnC7-F-OfARyw9hULIIMsYyBppAw&usqp=CAU"
];

var names = 
["Family Book", "Father", "Mother", "Brother", "Sister"];
};
var i = 0;
function Update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array )
    {
i = 0;
    }
    var updatedImage = images[1];
    var updatedName = names[1];
    document.getElementById(family_image).src = updatedImage;
    document.getElementById(family_member).innerHTML = updatedName;
}