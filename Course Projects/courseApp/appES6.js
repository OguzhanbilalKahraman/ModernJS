class Course {
    constructor(title, instructor, image){
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }


}


class UI{
    addCourseList(course){
        const list = document.getElementById('course-list');

        var html = `
            <tr>
                <td><img src="img/${course.image}"/></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">Delete </a></td>
             </tr>
    `;

        list.innerHTML += html;

    }


    clearCourseList(){
        const title= document.getElementById('title').value="";
        const instructor = document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";

    }

    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
    
        }

    }

    showAlert(message,className){
        var alert = `
    
        <div class="alert alert-${className}">
            ${message}

        </div>
    
    `;


    const row = document.querySelector('.row');
    // beforebegin, afterbegin, beforeend, afterend

    row.insertAdjacentHTML('beforeBegin', alert);

    setTimeout(()=>{
            document.querySelector('.alert').remove();
    },3000);


    }
}


document.getElementById('new-course').addEventListener('submit',function(e){

    const title= document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;


    


    // create coruse object

    const course = new Course(title,instructor,image);
    
    //create UI
    const ui = new UI();


    if(title==='' || instructor ==='' || image ==''){
        ui.showAlert('Please Complete The Form','warning');
    }else{
     // add course to list

    ui.addCourseList(course);



    // clear course to ui

    ui.clearCourseList();



    ui.showAlert('The Course has been added','success');



    
    }
    
    e.preventDefault();

 

});


document.getElementById('course-list').addEventListener('click',function(e){
    
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('The selected course has been deleted.','danger');

});