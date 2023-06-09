function todolist()
    {
        var list=document.getElementById("input").value;
        if(list=="")
        {
            alert("Please Enter a Task");
        }
        else
        {
        document.getElementById("result").innerHTML+=`
        <div class="resultbox">
            <span class="span">
                ${list}
            </span>
            <div>
                <button class="edit" id="edit">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button class="delete" id="delete">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
         </div>
        `;
        var edit=document.querySelectorAll(".edit");
        for(var x =0;x<edit.length;x++){
            edit[x].onclick = function(){
            this.parentNode.parentNode.contentEditable = true;
            this.parentNode.parentNode.focus();
            };
        };
        var del=document.querySelectorAll(".delete");
        for(var i =0;i<del.length;i++){
            del[i].onclick = function(){
            this.parentNode.parentNode.remove();
            };
        };
        };
    };
    var clear=document.querySelector(".clear");
    var res=document.getElementById("result");
    clear.addEventListener("click", function () {
    result.innerHTML = "";
});
