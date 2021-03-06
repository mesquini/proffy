import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface IScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface IData {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: IScheduleItem[];
}

class CreateClassService {
  async run({ name, avatar, whatsapp, bio, subject, cost, schedule }: IData) {
    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: IScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();
    } catch {
      await trx.rollback();

      throw Error("Unexpected error while creating new class");
    }
  }
}

export default new CreateClassService();
