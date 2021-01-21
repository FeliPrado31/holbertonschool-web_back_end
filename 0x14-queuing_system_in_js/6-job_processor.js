import kue from "kue";

const jobs = [
  {
    phoneNumber: "4153518780",
    message: "This is the code 123 to verify your account",
  },
  {
    phoneNumber: "4153518781",
    message: "This is the code 123 to verify your account",
  },
];

const queue = kue.createQueue();

for (const j of jobs) {
  const job = queue.create("push_notification_code", j).save((err) => {
    if (!err) console.log(`Notification job created: ${job.id}`);
    console.log(
      `Sending notification to ${j.phoneNumber}, with message: ${j.message}`
    );
  });
  job
    .on("complete", () => console.log(`Notification job ${job.id} completed`))
    .on("failed", (error) =>
      console.log(`Notification job ${job.id} failed: ${error}`)
    )
    .on("progress", (progress) =>
      console.log(`Notification job ${job.id} ${progress}% complete`)
    );
}
