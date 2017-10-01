import callApi from '../../util/apiCaller';

export function populateCourseData(data){
	
  return {type:"populate", assignmentsData: data};
}

export function getCourseData(course_num) {
  return function (dispatch) {
    dispatch(() => {return {type:"wait"};});
    return callApi("courses/" + course_num + "/assignments","get")
      .then(data => {
        dispatch(populateCourseData(data))
      })
  }
}