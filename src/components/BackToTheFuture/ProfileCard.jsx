import style from "./ProfileCard.module.css";

function ProfileCard() {
  const emmettBroun = {
    avatar:
      "https://static.wikitide.net/greatcharacterswiki/thumb/4/4f/Doc_-_BackTTFuture_067Pyxurz.jpg/1200px-Doc_-_BackTTFuture_067Pyxurz.jpg",
    fullname: "Emmett Brown",
    birthday: "1920",
    occupation: "Scientist",
    hobbies: ["inventing", "time travel", "clocks"],
  };

  function showProfileCard(obj) {
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

  return <div>{showProfileCard(emmettBroun)}</div>;
}

export default ProfileCard;
