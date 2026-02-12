import { useEffect, useState } from 'react';
import { BookOpen, Star } from 'lucide-react';
import { GITHUB_USERNAME } from '../../data/projects';

interface GitHubStats {
  publicRepos: number;
  totalStars: number;
}

const Stats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
            { signal: controller.signal }
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API request failed');
        }

        const user = await userRes.json();
        const repos: { stargazers_count: number }[] = await reposRes.json();
        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

        setStats({
          publicRepos: user.public_repos,
          totalStars,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Failed to fetch GitHub stats:', err);
        }
      }
    }

    fetchStats();
    return () => controller.abort();
  }, []);

  const items = [
    {
      icon: <BookOpen className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />,
      value: stats?.publicRepos ?? '—',
      label: 'Public Repos',
    },
    {
      icon: <Star className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />,
      value: stats?.totalStars ?? '—',
      label: 'GitHub Stars',
    },
  ];

  return (
    <div className="flex justify-center mt-12">
      <div className="flex divide-x divide-neutral-200 dark:divide-neutral-800">
        {items.map((item) => (
          <div key={item.label} className="text-center px-8">
            <div className="flex justify-center mb-1">{item.icon}</div>
            <div
              className={`text-2xl font-bold text-neutral-900 dark:text-neutral-100 ${
                stats === null ? 'animate-pulse' : ''
              }`}
            >
              {item.value}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
