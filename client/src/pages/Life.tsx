import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Users, 
  Music, 
  Palette, 
  Dumbbell,
  BookOpen,
  Heart,
  Calendar,
  Trophy,
  Camera,
  Utensils,
  Bus
} from "lucide-react";

export default function Life() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/club-activities.jpg')" }}
          />
          <div className="relative container h-full flex items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-4">学校生活</h1>
              <p className="text-xl font-medium">充実した高校3年間を過ごそう</p>
            </div>
          </div>
        </section>

        {/* 1日の流れ */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">1日の流れ</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                規則正しい生活リズムの中で、学習と活動のバランスを大切にしています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Clock className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <CardTitle className="text-lg">8:00 - 8:30</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold mb-2">朝の準備</h4>
                  <p className="text-sm text-muted-foreground">朝のSHR、読書タイム</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <CardTitle className="text-lg">8:30 - 15:15</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold mb-2">授業時間</h4>
                  <p className="text-sm text-muted-foreground">6時間の授業と昼食</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                  <CardTitle className="text-lg">15:15 - 17:30</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold mb-2">部活動</h4>
                  <p className="text-sm text-muted-foreground">各部活動の時間</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Bus className="h-8 w-8 mx-auto text-orange-600 mb-2" />
                  <CardTitle className="text-lg">17:30 - 18:00</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold mb-2">下校</h4>
                  <p className="text-sm text-muted-foreground">スクールバス・公共交通</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  時間割例（1年生）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">時限</th>
                        <th className="text-left p-2">月</th>
                        <th className="text-left p-2">火</th>
                        <th className="text-left p-2">水</th>
                        <th className="text-left p-2">木</th>
                        <th className="text-left p-2">金</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">1</td>
                        <td className="p-2">国語総合</td>
                        <td className="p-2">数学Ⅰ</td>
                        <td className="p-2">英語表現</td>
                        <td className="p-2">現代社会</td>
                        <td className="p-2">化学基礎</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2</td>
                        <td className="p-2">数学Ⅰ</td>
                        <td className="p-2">国語総合</td>
                        <td className="p-2">体育</td>
                        <td className="p-2">英語表現</td>
                        <td className="p-2">物理基礎</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3</td>
                        <td className="p-2">英語表現</td>
                        <td className="p-2">化学基礎</td>
                        <td className="p-2">数学Ⅰ</td>
                        <td className="p-2">保健</td>
                        <td className="p-2">国語総合</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4</td>
                        <td className="p-2">現代社会</td>
                        <td className="p-2">音楽Ⅰ</td>
                        <td className="p-2">現代社会</td>
                        <td className="p-2">体育</td>
                        <td className="p-2">数学A</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">昼食</td>
                        <td className="p-2 text-muted-foreground" colSpan={5}>12:15 - 13:00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">5</td>
                        <td className="p-2">物理基礎</td>
                        <td className="p-2">体育</td>
                        <td className="p-2">家庭基礎</td>
                        <td className="p-2">数学A</td>
                        <td className="p-2">英語表現</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">6</td>
                        <td className="p-2">LHR</td>
                        <td className="p-2">国語総合</td>
                        <td className="p-2">探究</td>
                        <td className="p-2">英語表現</td>
                        <td className="p-2">現代社会</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 部活動・学校行事タブ */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <Tabs defaultValue="clubs" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="clubs">部活動</TabsTrigger>
                <TabsTrigger value="events">学校行事</TabsTrigger>
                <TabsTrigger value="support">学校生活支援</TabsTrigger>
              </TabsList>

              {/* 部活動 */}
              <TabsContent value="clubs" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">部活動</h3>
                  <p className="text-muted-foreground">
                    運動部・文化部ともに活発に活動しており、多くの生徒が参加しています。
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 運動部 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Dumbbell className="h-5 w-5" />
                        運動部
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">野球</Badge>
                            <span className="text-sm">男子</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">陸上競技</Badge>
                            <span className="text-sm">男女</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">バスケットボール</Badge>
                            <span className="text-sm">男女</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">バレーボール</Badge>
                            <span className="text-sm">男女</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">卓球</Badge>
                            <span className="text-sm">男女</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">柔道</Badge>
                            <span className="text-sm">男女</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">剣道</Badge>
                            <span className="text-sm">男女</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">ソフトテニス</Badge>
                            <span className="text-sm">男女</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">主な実績</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• 陸上部：県大会入賞多数</li>
                          <li>• 柔道部：東北大会出場</li>
                          <li>• バレーボール部：地区大会優勝</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 文化部 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Palette className="h-5 w-5" />
                        文化部
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">吹奏楽</Badge>
                            <span className="text-sm">30名</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">美術</Badge>
                            <span className="text-sm">15名</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">茶道</Badge>
                            <span className="text-sm">12名</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">書道</Badge>
                            <span className="text-sm">10名</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">文芸</Badge>
                            <span className="text-sm">8名</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">科学</Badge>
                            <span className="text-sm">12名</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">写真</Badge>
                            <span className="text-sm">10名</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">コンピュータ</Badge>
                            <span className="text-sm">15名</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">主な実績</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• 吹奏楽部：東北大会出場</li>
                          <li>• 文芸部：全国大会入選</li>
                          <li>• 美術部：県コンクール入賞</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 学校行事 */}
              <TabsContent value="events" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">年間行事</h3>
                  <p className="text-muted-foreground">
                    学習と成長の機会となる様々な行事を通じて、充実した学校生活を送っています。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* 春の行事 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-pink-600">🌸 春（4-6月）</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>入学式</span>
                          <Badge variant="outline">4月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>新入生歓迎会</span>
                          <Badge variant="outline">4月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>春季体育大会</span>
                          <Badge variant="outline">5月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>中間考査</span>
                          <Badge variant="outline">5月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>期末考査</span>
                          <Badge variant="outline">6月</Badge>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 夏の行事 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-orange-600">🌻 夏（7-9月）</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>夏季補習</span>
                          <Badge variant="outline">7月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>野球応援</span>
                          <Badge variant="outline">7月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>学校祭</span>
                          <Badge variant="default">9月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>体育祭</span>
                          <Badge variant="default">9月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>修学旅行</span>
                          <Badge variant="outline">9月</Badge>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 秋の行事 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-orange-500">🍁 秋（10-12月）</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>中間考査</span>
                          <Badge variant="outline">10月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>芸術鑑賞会</span>
                          <Badge variant="outline">11月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>期末考査</span>
                          <Badge variant="outline">12月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>球技大会</span>
                          <Badge variant="outline">12月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>冬季休業</span>
                          <Badge variant="outline">12月</Badge>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 冬の行事 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-blue-600">❄️ 冬（1-3月）</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>百人一首大会</span>
                          <Badge variant="outline">1月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>学年末考査</span>
                          <Badge variant="outline">2月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>卒業式</span>
                          <Badge variant="default">3月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>離任式</span>
                          <Badge variant="outline">3月</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>春季休業</span>
                          <Badge variant="outline">3月</Badge>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* 特別行事 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      特別行事・イベント
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-3">学校祭「大東祭」</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          毎年9月に開催される本校最大のイベント。各クラスの展示や発表、部活動の成果発表が行われます。
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• クラス展示・発表</li>
                          <li>• 文化部発表</li>
                          <li>• 有志発表</li>
                          <li>• バザー・模擬店</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-3">修学旅行</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          2年生を対象に実施。関西方面への3泊4日の旅行で、歴史・文化学習を行います。
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• 京都・奈良の寺社見学</li>
                          <li>• 大阪城・USJ</li>
                          <li>• 班別自主研修</li>
                          <li>• 宿舎での交流</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 mb-3">創立100周年記念行事</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          令和7年度に開催される記念すべき式典。卒業生や地域の方々と共にお祝いします。
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• 記念式典</li>
                          <li>• 記念講演</li>
                          <li>• 同窓会・懇親会</li>
                          <li>• 記念誌発行</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 学校生活支援 */}
              <TabsContent value="support" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">学校生活支援</h3>
                  <p className="text-muted-foreground">
                    生徒一人ひとりが安心して学校生活を送れるよう、様々なサポート体制を整えています。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        カウンセリング
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• スクールカウンセラー常駐</li>
                        <li>• 個別相談対応</li>
                        <li>• 保護者相談</li>
                        <li>• ストレスチェック</li>
                      </ul>
                      <div className="mt-4 p-3 bg-red-50 rounded-lg">
                        <p className="text-xs text-red-700">
                          毎週火・木曜日に専門カウンセラーが対応
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Utensils className="h-5 w-5" />
                        食堂・売店
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• 栄養バランスを考えた定食</li>
                        <li>• 人気のカレー・ラーメン</li>
                        <li>• パン・おにぎり販売</li>
                        <li>• 文房具・日用品販売</li>
                      </ul>
                      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                        <p className="text-xs text-orange-700">
                          営業時間：11:30〜13:30
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bus className="h-5 w-5" />
                        通学サポート
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• スクールバス運行</li>
                        <li>• 自転車通学許可制</li>
                        <li>• 駐車場完備（許可制）</li>
                        <li>• 交通安全指導</li>
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-blue-700">
                          千厩・室根・藤沢方面へスクールバス運行
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        学習支援
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• 放課後補習授業</li>
                        <li>• 夏季・冬季講習</li>
                        <li>• 個別指導対応</li>
                        <li>• 図書館学習室</li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-xs text-green-700">
                          図書館は19:00まで利用可能
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        生徒会活動
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• 生徒会執行部</li>
                        <li>• 各種委員会活動</li>
                        <li>• 学校行事企画・運営</li>
                        <li>• ボランティア活動</li>
                      </ul>
                      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                        <p className="text-xs text-purple-700">
                          生徒主体の自主的な活動を推進
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Camera className="h-5 w-5" />
                        記録・広報
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li>• 学校新聞発行</li>
                        <li>• アルバム制作</li>
                        <li>• ホームページ更新</li>
                        <li>• SNS情報発信</li>
                      </ul>
                      <div className="mt-4 p-3 bg-cyan-50 rounded-lg">
                        <p className="text-xs text-cyan-700">
                          月1回の学校新聞「大東の風」発行
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">学校見学・体験入学</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              実際の授業や部活動を見学・体験して、
              大東高校の魅力を肌で感じてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-serif">
                学校見学の申し込み
              </Button>
              <Button size="lg" variant="outline" className="font-serif">
                体験入学の詳細
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
