let data = [
    { 
      id : '1',
      Domain: "Front End Developer",
      Skills: [
        ['HTML', '90'],
        ['CSS', '85'],
        ['Js', '80'],
        ['PHP', '75'],
        ['WordPress', '85']
      ]
    },
    {
      id:'2',
      Domain: "Languages",
      Skills: [
        ['Hindi', '90'],
        ['English', '85'],
      ]
    },
    {
      id:'3',
      Domain: 'Back End Development',
      Skills: [
        ['NodeJs', '90'],
        ['SSR', '85']
      ]
    },
    { 
        id : '4',
        Domain: "Front End Developer",
        Skills: [
          ['HTML', '90'],
          ['CSS', '85'],
          ['Js', '80'],
          ['PHP', '75'],
          ['WordPress', '85']
        ]
    },
    {
        id:'5',
        Domain: "Languages",
        Skills: [
          ['Hindi', '90'],
          ['English', '85'],
        ]
    },
    {
        id:'6',
        Domain: 'Back End Development',
        Skills: [
          ['NodeJs', '90'],
          ['SSR', '85']
        ]
    }
]


function skill_set(skills) {
    return skills.map(([skill, proficiency]) => `
      <div class="skills-set">
        <div class="skills-set-text grey">
          <div>${skill}</div>
          <div>${proficiency}%</div>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${proficiency}%"></div>
        </div>
      </div>
    `).join('');
}

function skillCards(data) {
    return data.map( (d) => `
      <div id="${d.id}" class="skill-card">
        <h3>${d.Domain}</h3>
        <div class="skills-container">
          ${skill_set(d.Skills)}
        </div>
      </div>
    `).join('');
}
const skills_group = document.getElementById('skills-group'); 
skills_group.innerHTML = skillCards(data);

const addSkillButton = document.getElementById('addskill');
const mask = document.getElementById('popupform-mask');

let popup_visible = false;

const togglePopUp = ()=>{
    popup_visible = !popup_visible;
    if(popup_visible){
        document.body.style.overflowY = "hidden";
        mask.classList.add('active');
        mask.classList.remove('notactive');
    }
    else{
        document.body.style.overflowY = "auto";
        mask.classList.remove('active');
        mask.classList.add('notactive');
    }

}

const skill_submit=()=>{  
    console.log("skill_submit");
    let obj = {};
    let dvalid = true;
    let valid = false;
    const domain = document.getElementById('00')?.value.trim();
    if(domain===null || domain==="")   dvalid=false;
    else    obj.Domain = domain;
    let skillarr = [];
    for(let i=1 ; i<=5 ; i++){
        let v = true;
        const element1 = document.getElementById(`${i}${1}`)?.value.trim();
        const element2 = parseInt(document.getElementById(`${i}${2}`)?.value.trim());
        if( element1===null  ||  element1 === "" )  v=false;
        if( element2===null  ||  isNaN(element2)===true || element2>100 || element2<0 ) v=false;  
        if(v)      skillarr = [...skillarr,[element1,`${element2}`]];
        valid = valid | v;
    }
    let id = crypto.randomUUID();
    if(valid && dvalid){
        obj.id = id;
        obj.Skills = skillarr;
        data.push(obj);
        skills_group.innerHTML = "";
        skills_group.innerHTML = skillCards(data);
        togglePopUp();
    }
    else    alert('Fill Form Correctly');

    return false;
}
