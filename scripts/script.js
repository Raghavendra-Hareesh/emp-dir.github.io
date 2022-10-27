
generateCard();

var submit_btn = document.getElementById("submit");

submit_btn.addEventListener('click', function(){

    var tempArr = [];

    var dept = document.getElementsByName('dept');
    var branch = document.getElementsByName('branch');
    var exp = document.getElementsByName('exp');
    var dept_All = document.getElementById('dept_All')
    var branch_All = document.getElementById('branch_All')
    var exp_All = document.getElementById('exp_All')

    if(dept_All.checked)
    {
        for (var i of dept)
            tempArr.push(i.id);
    }
    else
    {
        for (var i of dept)
        {
            if (i.checked) 
            {
                tempArr.push(i.id);
            }
        }
    }

    if(branch_All.checked)
    {
        for (var i of branch)
            tempArr.push(i.id);
    }
    else
    {
        for (var i of branch)
        {
            if (i.checked) 
            {
                tempArr.push(i.id);
            }
        }
    }

    if(exp_All.checked)
    {
        for (var i of exp)
            tempArr.push(i.id);
    }
    else
    {
        for (var i of exp)
        {
            if (i.checked) 
            {
                tempArr.push(i.id);
            }
        }
    }

    display(tempArr)
})

function display(temp)
{
    var lst = []
    const card = document.getElementsByClassName("card");
    var count = new Array(data.length).fill(0)
    var unq = new Set()

    for(let i=0; i<temp.length; i++)
    {        
        var x = temp[i].split("_");

        var field=0, abb="";

        for(let j=0; j<x.length-1; j+=2)
        {
            if(x[j] === 'dept')
            {
                field = 5;
                var y = x[j+1];

                if(y === 'PE')
                    abb = "Product Engineer"
                
                else if(y === 'QA')
                    abb = "Quality Assurance"
                
                else if(y === 'HR')
                    abb = "HR"
            }

            else if(x[j] === 'branch')
            {
                field = 7
                abb = x[j+1]
            }
            
            else
            {
                field = 2
                abb = x[j+1]

                if(abb === 'full')
                    abb += " time"
            }

        }

        unq.add(field)

        for(let i=0; i<data.length; i++)
        {
            if(data[i][field].toLowerCase() === abb.toLowerCase())
            {
                count[i]++
            }
        }

    }

    for(let i=0; i<data.length; i++)
    {
        if(count[i] == unq.size)
        {
            // console.log(data[i][0])
            lst.push(i)
        }
    }

    for(let j=0; j<cards.length; j++)
    {
        card[j].style.display = "none";
    }

    for(let i=0; i<lst.length; i++)
    {
        // console.log(lst[i])
        card[lst[i]].style.display = "unset";
    }
}

var ul = document.getElementById("dept_ul");

for(let i=0; i<dept_arr.length; i++)
{
    var li = document.createElement('li');

    var x = dept_arr[i].split(" ");
    var abb="";

    if(x.length > 1)
        abb += x[0].charAt(0) + "" + x[1].charAt(0);
    else
        abb = x[0];

    var y = "dept";
    var id = y + "_" + abb;

    var ind = 5;

    li.innerHTML += `
    <input type="checkbox" name=${y} id=${id}>
    <label for=${id}>${dept_arr[i]}</label>
    `;

    ul.append(li);
}

ul = document.getElementById("branch_ul");

for(let i=0; i<branch_arr.length; i++)
{
    var li = document.createElement('li');

    var y = "branch";

    var x = branch_arr[i].toLowerCase();

    var id = y + "_" + x;

    var ind = 7;

    li.innerHTML += `
    <input type="checkbox" name=${y} id=${id}>
    <label for=${id}>${branch_arr[i]}</label>
    `;

    ul.append(li);
}

ul = document.getElementById("exp_ul");

for(let i=0; i<exp_arr.length; i++)
{
    var li = document.createElement('li');

    var y = "exp";

    var x = exp_arr[i].toLowerCase().split(" ")[0];

    var id = y + "_" + x;

    var ind = 7;

    li.innerHTML += `
    <input type="checkbox" name=${y} id=${id}>
    <label for=${id}>${exp_arr[i]}</label>
    `;

    ul.append(li);
}

const letter_fil = document.querySelector(".letter_filter");

const btn = document.createElement('button');
btn.classList = 'btn';

btn.addEventListener("click", function() {
    displayAll();
}, false);

const letter_btn = '#';

btn.innerHTML += letter_btn;
letter_fil.appendChild(btn);

for(let i=0; i<26; i++)
{
    const letter_fil = document.querySelector(".letter_filter");

    const btn = document.createElement('button');
    btn.classList = 'btn';

    let x = String.fromCharCode(('A'.charCodeAt(0) + i));

    btn.addEventListener("click", function() {
        myfunction(x);
    }, false);

    const letter_btn = `${x}`;

    btn.innerHTML += letter_btn;
    letter_fil.appendChild(btn);
}
function generateCard()
{
    data.forEach((element,i) =>{
        generateNewCard(data[i],i);
    });
}

function generateNewCard(emp_data,i)
{
    const emp_Crd = document.querySelector(".employee_cards");


        const card = document.createElement('div');
        card.classList = 'card';
        // card.setAttribute("onclick","empPopUpOpen()");

        var unq_class_name = "emp_card_" + emp_data[0];
        var unq_class_name_popup = "emp_card_popup_" + emp_data[0];

        // console.log(unq_class_name);

        const empCard = `
        <div class="emp_card" id="${unq_class_name}" onclick="empPopUpOpen('${unq_class_name}','${unq_class_name_popup}')">
            <div class="card_top"></div>
            <div class="card_img"><img id="card_img_${i}" src=${emp_data[3]} alt="image" width= "140px" height="140px"></div>
            <div class="card_details">
                <span class="emp_card_details emp_name">${emp_data[0]}</span>
                <span class="emp_card_details emp_name">${emp_data[1]}</span>
                <p class="card_info">
                    <span class="emp_card_details">${emp_data[2]}</span><br>
                    <span class="emp_card_details">${emp_data[4]}</span><br>
                    <span class="emp_card_details">${emp_data[6]}</span><br>
                    <span class="emp_card_details">${emp_data[5]}</span><br>
                <p>
            </div>
            <div class="card_footer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                    <b><span class="emp_card_details_location">${emp_data[7]}</span></b>
                </div>
            </div>
        </div>

        <div class="emp_popup_div" id="${unq_class_name_popup}">
            <!--div class="card_edit_top"--></!--div>
            <div class="card_edit_details">
                <span class = "emp_popup_edit">
                    <div class="name_box">
                        <input type="text" id="${unq_class_name_popup}_edit_fname" placeholder="${emp_data[0]}" disabled class="edit_boxes">
                        <input type="text" placeholder="${emp_data[1]}" disabled id="${unq_class_name_popup}_edit_lname" class="edit_boxes">
                    </div>
                    <select id="${unq_class_name_popup}_edit_role" class="edit_boxes" disabled>
                        <option disabled selected>${emp_data[2]}</option>
                        <option>Intern</option>
                        <option>Full Time</option>
                    </select>
                    <input type="text" placeholder="${emp_data[4]}" disabled id="${unq_class_name_popup}_edit_email" class="edit_boxes"><br>
                    <input type="text" placeholder="${emp_data[6]}" disabled id="${unq_class_name_popup}_edit_phone" class="edit_boxes"><br>
                    <select id="${unq_class_name_popup}_edit_dept" class="edit_boxes" disabled>
                        <option disabled selected>${emp_data[5]}</option>
                        <option>Product Engineer</option>
                        <option>Quality Assurance</option>
                        <option>HR</option>
                    </select>
                    <select id="${unq_class_name_popup}_edit_loc" class="edit_boxes" disabled>
                        <option disabled selected>${emp_data[7]}</option>
                        <option>Madhapur</option>
                        <option>Kondapur</option>
                    </select>
                    <div class="edit_image_upload">Change Image: <input type="file" id="edit_img" disabled></div>
                </span>
            </div>
            <div class="card_edit_footer">
                <button onclick="enableInputs('${unq_class_name_popup}')">Edit</button>
                <button onclick="editEmployeeDetails('${unq_class_name_popup}','${unq_class_name}',${i})" id="save_edit">Close</button>
            </div>
        </div>

        `;

        card.innerHTML += empCard;
        emp_Crd.appendChild(card);
}

function empPopUpOpen(x,y)
{
    empPopUpCloseRem(x,y);
    var emp_card = document.getElementById(x);
    var emp_card_popup = document.getElementById(y);

    emp_card.style.display = "none";
    emp_card_popup.style.display = "block";
}

function empPopUpClose(x,y)
{
    var emp_card = document.getElementById(y);
    var emp_card_popup = document.getElementById(x);

    emp_card_popup.style.display = "none";
    emp_card.style.display = "unset";

    disableInputs(x);
}

function empPopUpCloseRem(x,y)
{
    var emp_cards = document.getElementsByClassName("emp_card");
    var popups = document.getElementsByClassName("emp_popup_div");

    for(let i=0; i<emp_cards.length; i++)
    {
        emp_cards[i].style.display = "unset";
        popups[i].style.display = "none";
    }

    var emp_card = document.getElementById(y);
    var emp_card_popup = document.getElementById(x);

    emp_card_popup.style.display = "unset";
    emp_card.style.display = "none";
}

function enableInputs(x)
{
    var details = document.getElementById(x);

    var input_box = details.getElementsByTagName('input');
    var select_box = details.getElementsByTagName('select');
    
    for(let i=0; i<input_box.length; i++)
    {
        input_box[i].disabled = false;
    }
    
    for(let i=0; i<select_box.length; i++)
    {
        select_box[i].disabled = false;
    }

    var save_btn = document.getElementById("save_edit");

    save_btn.textContent = "Save";
}

function disableInputs(x)
{
    var details = document.getElementById(x);

    var input_box = details.getElementsByTagName('input');
    var select_box = details.getElementsByTagName('select');
    
    for(let i=0; i<input_box.length; i++)
    {
        input_box[i].disabled = true;
    }
    
    for(let i=0; i<select_box.length; i++)
    {
        select_box[i].disabled = true;
    }

    var save_btn = document.getElementById("save_edit");

    save_btn.textContent = "Close";
}

var edit_image_input = document.getElementById("edit_img");

var up_image = "";

edit_image_input.addEventListener("change", function(event){
    up_image += URL.createObjectURL(event.target.files[0]);
    // console.log(up_image);
},false);

function editEmployeeDetails(x,y,i)
{
    var emp_card = document.getElementById(y);
    var det = emp_card.getElementsByClassName("emp_card_details");
    var det_loc = emp_card.getElementsByClassName("emp_card_details_location")[0];

    var fname = document.getElementById(x+"_edit_fname").value;
    var lname = document.getElementById(x+"_edit_lname").value;
    var role = document.getElementById(x+"_edit_role").value;
    var email = document.getElementById(x+"_edit_email");
    var phone = document.getElementById(x+"_edit_phone");
    var dept = document.getElementById(x+"_edit_dept").value;
    var loc = document.getElementById(x+"_edit_loc").value;

    var img_id = "card_img_" +i;

    var popup_img = document.getElementById(img_id);

    if(up_image)
        popup_img.setAttribute("src",up_image);

    // console.log(up_image);

    if(String(fname))
    {
        det[0].innerText = fname;
        data[i][0] = fname;
    }
    if(String(lname))
    {
        det[1].innerText = lname;
        data[i][1] = lname;
    }
    if(String(role))
    {
        det[2].innerText = role;
        data[i][2] = role;
    }
    if(String(email.value))
    {
        if(isValidEmail(email.value))
        {
            det[3].innerText = email.value;
            data[i][4] = email.value;
            email.style.borderColor = "none";
        }
        else
        {
            email.style.borderColor = "Red";
        }
    }
    if(String(phone.value))
    {
        if(isValidPhone(phone.value))
        {
            det[4].innerText = "+91 " + phone.value.substring(0,5) + " " + phone.value.substring(5,10);
            data[i][6] = phone.value;
            phone.style.borderColor = "none";
        }
        else
        {
            phone.style.borderColor = "Red";
        }
    }
    if(String(dept))
    {
        det[5].innerText = dept;
        data[i][5] = dept;
    }
    if(String(loc))
    {
        det_loc.innerText = loc;
        data[i][7] = lname;
    }

    if(isValidEmail(email.value) && isValidPhone(phone.value))
        empPopUpClose(x,y);
}

function isValidEmail(email)
{
    var b1 = true;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email!="" && email.match(mailformat)==null)
        b1=false;

    return b1;
}

function isValidPhone(phone)
{
    var b1 = true;
    
    if(phone != "" && (isNaN(phone) || phone.length != 10))
        b1=false;

    return b1;
}

function myfunction(c)
{
    const card = document.getElementsByClassName("card");

    for(let j=0; j<data.length; j++)
    {
        card[j].style.display = "none";
        
        if(data[j][0].toUpperCase().charAt(0) == c)
            card[j].style.display = "unset";
    }
}

function displayAll()
{
    const card = document.getElementsByClassName("card");

    for(let j=0; j<data.length; j++)
        card[j].style.display="unset";
}

var f_namefilter = document.getElementById("fname_fil");
var l_namefilter = document.getElementById("lname_fil");
const cards = document.getElementsByClassName("card");

f_namefilter.addEventListener('keyup', f_filterCards);
l_namefilter.addEventListener('keyup', l_filterCards);

function f_filterCards(){
    let f_filterVal = f_namefilter.value;

    for(let i=0; i<cards.length; i++)
    {
        cards[i].style.display = "none";

        if(data[i][0].toLowerCase().indexOf(f_filterVal.toLowerCase()) == 0)
            cards[i].style.display = "unset";
    }
}

function l_filterCards(){
    let l_filterVal = l_namefilter.value;

    for(let i=0; i<cards.length; i++)
    {
        cards[i].style.display = "none";

        if(data[i][1].toLowerCase().indexOf(l_filterVal.toLowerCase()) == 0)
            cards[i].style.display = "unset";
    }
}

function cardview()
{
    const tab = document.getElementsByClassName("content_table");
    const cardView = document.getElementsByClassName("cardView");

    tab[0].style.display = "none";
    cardView[0].style.display = "flex";
    
    const cbtn = document.getElementById("cb");
    const lbtn = document.getElementById("lb");

    cbtn.style.display = "none";
    lbtn.style.display = "unset";
}

function listview()
{
    const tab = document.getElementsByClassName("content_table");
    const cardView = document.getElementsByClassName("cardView");

    tab[0].style.display = "unset";
    cardView[0].style.display = "none";

    const lbtn = document.getElementById("lb");
    const cbtn = document.getElementById("cb");

    lbtn.style.display = "none";
    cbtn.style.display = "unset";
}

function fun2()
{
    var clk = document.getElementById("click");
    var cross = document.getElementsByClassName("cross");
    var menulst = document.getElementsByClassName("content_menu");
    var mb = document.getElementsByClassName("menu-button");

    if(clk.checked == true)
    {
        menulst[0].style.display = "unset";
        cross[0].style.display = "unset"
        mb[0].style.display = "none";
    }
    else
    {
        menulst[0].style.display = "none";
        mb[0].style.display = "unset";
    }
}

function displayRegForm()
{
    var form = document.getElementById("registration_form");

    form.style.display="flex";

    var bg = document.getElementsByClassName("employee_cards");

    bg[0].style.opacity = "25%";

}

function closeForm()
{
    var form = document.getElementById("registration_form");

    form.style.display="none";

    var bg = document.getElementsByClassName("employee_cards");

    bg[0].style.opacity = "100%";
}

var image_input = document.getElementById("image_uploaded");
    
var uploaded_image = "";

image_input.addEventListener("change", function(event){
    uploaded_image = URL.createObjectURL(event.target.files[0]);
    // console.log(uploaded_image);
});

var isValid = new Array(8);
var x = new Array(2);

for(let i=0; i<4; i++)
{
    x[i] = document.querySelector("#"+reg_form_param[i]);    

    x[i].style.borderStyle = "solid";
    x[i].style.borderColor = "#C5C5C5";

    var finalColor = ""

    isValid[i] = false;

    x[i].addEventListener('focusin',function(){
        x[i].style.borderColor = "Red";
        finalColor = "Red";
    });

    x[i].addEventListener('keyup', function(){
        if(i == 1 || i == 0)
        {
            if(x[i].value.length != 0)
            {
                x[i].style.borderColor = finalColor = "Green";
                isValid[i] = true;
            }
            else
                x[i].style.borderColor = finalColor = "Red";
        }
        if(i == 2)
        {
            var email = document.getElementById("reg_email");
            
            if(!isValidEmail(email.value,email) || email.value.length == 0)
                x[i].style.borderColor = finalColor = "Red";
            else
            {
                x[i].style.borderColor = finalColor = "Green";
                isValid[i] = true;
            }
        }
        if(i == 3)
        {
            var phone = document.getElementById("reg_phone");

            if(!isValidPhone(phone.value,phone))
                x[i].style.borderColor = finalColor = "Red";
            else
            {
                x[i].style.borderColor = finalColor = "Green";
                isValid[i] = true;
            }
        }
    })

    x[i].addEventListener('focusout',function(){x[i].style.borderColor = finalColor});
}

var y = document.getElementById("registration_form");
var y_sel = y.getElementsByTagName('Select');

for(let i=0; i<y_sel.length; i++)
{
    y_sel[i].style.borderStyle = "solid";
    y_sel[i].style.borderColor = "#C5C5C5";

    var finalColor = "";
    isValid[i+4] = false;

    y_sel[i].addEventListener('change',function(){
        if(y_sel[i].value !== reg_form_sel_param[i])
        {
            y_sel[i].style.borderColor = finalColor = "Green";
            isValid[i+4] = true;
        }
        else
            finalColor = "Red";
    });

    y_sel[i].style.borderColor = finalColor;
}

function addEmployeeData()
{
    var emp_data =[];

    var fname = document.getElementById("reg_fname").value;
    var lname = document.getElementById("reg_lname").value;
    var email = document.getElementById("reg_email").value;
    var phone = document.getElementById("reg_phone").value;
    var dept = document.getElementById("reg_dept").value;
    var role = document.getElementById("reg_role").value;
    var loc = document.getElementById("reg_location").value;

    emp_data.push(fname);
    emp_data.push(lname);
    emp_data.push(role);
    emp_data.push("assets/nil.jpg");
    emp_data.push(email);
    emp_data.push(dept);
    emp_data.push("+91 " + phone.substring(0,5) + " " + phone.substring(5,10));
    emp_data.push(loc);    

    if(uploaded_image.length != 0)
    {
        emp_data[3] = uploaded_image;
    }

    var flag = validateForm();

    if(flag.length == 0)
    {
        generateNewCard(emp_data);        
        closeForm();
    }
    else
    {
        for(let i=0; i<flag.length; i++)
        {
            var x = document.querySelector("#"+flag[i]);

            x.style.borderColor = "Red";
        }
    }
}

function validateForm()
{
    var temp = []
    for(let i=0; i<isValid.length; i++)
    {
        if(isValid[i] == false)
            temp.push(reg_form_param[i]);
    }

    return temp;
}
