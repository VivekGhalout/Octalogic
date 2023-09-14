const iniData = {
    Latest_enrolments: [],
    Best_students: [],
    Course_list: []
}

const reducer = (state=iniData, action) => {
        switch(action.type) {
            case "ENROLMENT" : 
            return {...state, Latest_enrolments: action.payload};

            case "STUDENTS" : 
            return {...state, Best_students: action.payload};

            case "COURSE" : 
            return {...state, Course_list: action.payload};

            default : return state;
        }
}

export default reducer;