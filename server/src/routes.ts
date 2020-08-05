import express from "express";
import CreateClassService from "./services/CreateClassService";
import ListClassService from "./services/ListClassService";
import convertHourToMinutes from "./utils/convertHourToMinutes";
import CreateConnectionService from "./services/CreateConnectionService";
import ListConnectionService from "./services/ListConnectionService";

const routes = express.Router();

routes.post("/classes", async (req, res) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

  try {
    await CreateClassService.run({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    });

    return res.status(201).send();
  } catch {
    return res
      .status(400)
      .json({ error: "Unexpected error while creating new class" });
  }
});

routes.get("/class", async (req, res) => {
  const filters = req.query;

  const week_day = filters.week_day as string;
  const subject = filters.subject as string;
  const time = filters.time as string;

  if (!week_day || !subject || !time) {
    return res.status(400).json({ error: "Missing filters to serch classes" });
  }

  const lstClass = await ListClassService.run({ subject, time, week_day });

  return res.status(200).json(lstClass);
});

routes.post("/connections", async (req, res) => {
  const { user_id } = req.body;

  await CreateConnectionService.run(user_id);

  return res.status(201).send();
});

routes.get("/connections", async (req, res) => {
  const total = await ListConnectionService.run();

  return res.status(200).json({ total });
});

export default routes;
