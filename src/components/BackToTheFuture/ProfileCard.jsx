import style from "./ProfileCard.module.css";


function ProfileCard(obj) {
  

  function showProfileCard() {
    if (obj.avatar && obj.fullname) {
      return (
        <div className={style.profileCard}>
          <h2>{obj.fullname}</h2>
          <div>
            <img src={obj.avatar} alt="character img" />
          </div>
          <p>
            <span>Birthday:</span> {obj.birthday}
          </p>
          <p>
            <span>Occupation:</span> {obj.occupation}
          </p>
          <p>
            <span>Hobbies:</span> {obj.hobbies.join(", ")}
          </p>
        </div>
      );
    }
    return <p>Not valid data!😒</p>;
  }

  return <div>{showProfileCard(obj)}</div>;
}

export default ProfileCard;
