import React from 'react';

const LearningTip = () => {
    return (

<section className="mx-auto max-w-7xl px-5 pb-16">
  <h2 className="mb-8 text-3xl font-bold text-white">
    📌 Learning Tips
  </h2>

  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold text-white">
        📚 Study Techniques
      </h3>
      <p className="text-sm leading-6 text-gray-400">
        Use active recall, take short notes, revise regularly, and practice with
        real projects to remember lessons better.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold text-white">
        ⏳ Time Management Tips
      </h3>
      <p className="text-sm leading-6 text-gray-400">
        Make a daily learning routine, study in small focused sessions, avoid
        distractions, and complete one lesson at a time.
      </p>
    </div>
  </div>
</section>

    );
};

export default LearningTip;