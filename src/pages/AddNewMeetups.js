import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function AddNewMeetupPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData){
      

        fetch(
            'https://ulima-39197-default-rtdb.firebaseio.com/chaz.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }


        ).then(()=>{

            history.replace('/');
        });
    }
  return (
    <section>
      <h1>Add New Meet Up</h1>
      <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default AddNewMeetupPage;
