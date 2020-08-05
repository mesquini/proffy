import convertHourToMinutes from "../utils/convertHourToMinutes";
import db from "../database/connection";

interface IFilter {
  week_day: string;
  subject: string;
  time: string;
}

class ListClassService {
  async run({ week_day, subject, time }: IFilter) {
    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return classes;
  }
}

export default new ListClassService();
