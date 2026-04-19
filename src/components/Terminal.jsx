import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const commands = [
  { prompt: "~", cmd: "dbt run --select marts.* --target prod", output: "Completed successfully. 47 models passed." },
  { prompt: "~", cmd: 'snowsql -q "SELECT COUNT(*) FROM analytics.daily_metrics"', output: "┌──────────┐\n│ 10847293 │\n└──────────┘" },
  { prompt: "~", cmd: "airflow dags trigger etl_pipeline --conf '{\"env\": \"prod\"}'", output: "Created <DagRun etl_pipeline @ 2026-04-19T09:00:00+00:00>" },
  { prompt: "~", cmd: "python optimize_warehouse.py --analyze-costs", output: "✓ Identified 12 slow queries\n✓ Recommended 3 clustering keys\n✓ Estimated savings: $18,200/quarter" },
  { prompt: "~", cmd: "dbt test --select tag:critical", output: "All 94 tests passed ✓" },
];

function TerminalLine({ command, isActive, isComplete, delay }) {
  const [typedCmd, setTypedCmd] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < command.cmd.length) {
        setTypedCmd(command.cmd.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowOutput(true), 300);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [isActive, command.cmd]);

  if (!isActive && !isComplete) return null;

  return (
    <div className="mb-3">
      <div className="flex items-start gap-2">
        <span className="text-green-400 shrink-0 select-none">
          rahul@data {command.prompt} $
        </span>
        <span className="text-gray-200">
          {isComplete ? command.cmd : typedCmd}
          {isActive && !showOutput && (
            <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse" />
          )}
        </span>
      </div>
      {(showOutput || isComplete) && command.output && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-cyan-300/80 text-sm mt-1 ml-6 whitespace-pre-wrap font-mono"
        >
          {command.output}
        </motion.div>
      )}
    </div>
  );
}

export default function Terminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const runNext = () => {
      if (current < commands.length) {
        setActiveIndex(current);
        current++;
        const cmdLength = commands[current - 1].cmd.length;
        setTimeout(runNext, cmdLength * 35 + 1500);
      }
    };

    setTimeout(runNext, 800);
  }, [isInView]);

  return (
    <section className="py-24 bg-white dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-sm font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Daily Workflow
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            A Day in My{' '}
            <span className="gradient-text">Terminal</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20"
        >
          {/* Title bar */}
          <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-gray-400 ml-2 font-mono">
              rahul@cloudeqs-data ~ zsh
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-gray-900 dark:bg-[#0a0e1a] p-6 min-h-[320px] font-mono text-sm leading-relaxed overflow-x-auto">
            {commands.map((cmd, i) => (
              <TerminalLine
                key={i}
                command={cmd}
                isActive={i === activeIndex}
                isComplete={i < activeIndex}
                delay={i * 0.5}
              />
            ))}
            {activeIndex >= commands.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 mt-2"
              >
                <span className="text-green-400">rahul@data ~ $</span>
                <span className="w-2 h-4 bg-green-400 animate-pulse" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
