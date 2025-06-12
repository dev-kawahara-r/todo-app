import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
            ダッシュボード
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            あなたのタスクを管理してください
          </p>
        </header>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              今日のタスク
            </h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              タスクを追加
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                  <span className="ml-3 text-gray-800 dark:text-gray-200">アプリデザインを完成させる</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">今日</span>
              </li>
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                  <span className="ml-3 text-gray-800 dark:text-gray-200">LP画面のレビュー依頼</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">今日</span>
              </li>
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                  <span className="ml-3 text-gray-800 dark:text-gray-200">APIとの連携をテストする</span>
                </div>
                <span className="text-sm text-red-500">期限切れ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                進行中
              </h2>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">4件</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
              <ul className="space-y-3">
                <li className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">フロントエンド開発</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full">
                      開発
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    UIコンポーネントの実装と統合
                  </p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>進捗</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </li>

                <li className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">デザインレビュー</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-full">
                      デザイン
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    新しいUIデザインのレビューとフィードバック
                  </p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>進捗</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                完了済み
              </h2>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">12件</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked
                      readOnly
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <span className="ml-3 text-gray-500 dark:text-gray-400 line-through">プロジェクト設計書の作成</span>
                  </div>
                  <span className="text-xs text-green-500">完了</span>
                </li>
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked
                      readOnly
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <span className="ml-3 text-gray-500 dark:text-gray-400 line-through">認証機能の実装</span>
                  </div>
                  <span className="text-xs text-green-500">完了</span>
                </li>
                <li className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked
                      readOnly
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <span className="ml-3 text-gray-500 dark:text-gray-400 line-through">データベース設計</span>
                  </div>
                  <span className="text-xs text-green-500">完了</span>
                </li>
              </ul>
              <div className="mt-3 text-center">
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  すべて表示
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

export const runtime = 'edge';