import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Building, 
  TrendingUp, 
  Users, 
  BookOpen,
  Award,
  Target,
  Calendar,
  PieChart,
  BarChart3,
  MapPin,
  Clock
} from "lucide-react";

export default function Career() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/history-bg.jpg')" }}
          />
          <div className="relative container h-full flex items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-4">進路情報</h1>
              <p className="text-xl font-medium">夢の実現に向けて、確実にサポート</p>
              <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
                進路実現率 98.5%
              </Badge>
            </div>
          </div>
        </section>

        {/* 進路実績 */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">進路実績</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                生徒一人ひとりの希望に応じた進路指導で、
                高い進路実現率を誇っています。
              </p>
            </div>

            {/* 進路状況 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <GraduationCap className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <CardTitle className="text-2xl font-bold text-blue-600">45%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold">大学進学</h4>
                  <p className="text-sm text-muted-foreground">国公立・私立大学</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <CardTitle className="text-2xl font-bold text-green-600">25%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold">専門学校</h4>
                  <p className="text-sm text-muted-foreground">各種専門学校</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Building className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                  <CardTitle className="text-2xl font-bold text-purple-600">28%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold">就職</h4>
                  <p className="text-sm text-muted-foreground">県内外企業</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 mx-auto text-orange-600 mb-2" />
                  <CardTitle className="text-2xl font-bold text-orange-600">2%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h4 className="font-semibold">その他</h4>
                  <p className="text-sm text-muted-foreground">公務員など</p>
                </CardContent>
              </Card>
            </div>

            {/* 詳細データ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    過去3年間の進路状況
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">大学進学</span>
                        <span className="text-sm text-muted-foreground">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">就職</span>
                        <span className="text-sm text-muted-foreground">28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">専門学校</span>
                        <span className="text-sm text-muted-foreground">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">その他</span>
                        <span className="text-sm text-muted-foreground">2%</span>
                      </div>
                      <Progress value={2} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    主な進路先実績
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">国公立大学</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span>• 岩手大学</span>
                        <span>• 岩手県立大学</span>
                        <span>• 東北大学</span>
                        <span>• 山形大学</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">私立大学</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span>• 東北学院大学</span>
                        <span>• 岩手医科大学</span>
                        <span>• 日本大学</span>
                        <span>• 東海大学</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-600 mb-2">主な就職先</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span>• JR東日本</span>
                        <span>• 東北電力</span>
                        <span>• 一関市役所</span>
                        <span>• 岩手県警</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 進路指導タブ */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <Tabs defaultValue="guidance" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="guidance">進路指導</TabsTrigger>
                <TabsTrigger value="university">大学進学</TabsTrigger>
                <TabsTrigger value="employment">就職支援</TabsTrigger>
                <TabsTrigger value="schedule">年間計画</TabsTrigger>
              </TabsList>

              {/* 進路指導 */}
              <TabsContent value="guidance" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">進路指導体制</h3>
                  <p className="text-muted-foreground">
                    1年次から系統的な進路指導を実施し、
                    生徒の希望進路の実現をサポートしています。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        1年次
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 進路希望調査</li>
                        <li>• 職業理解講座</li>
                        <li>• 大学・専門学校見学</li>
                        <li>• インターンシップ準備</li>
                        <li>• 基礎学力向上支援</li>
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-blue-700">
                          自己理解と職業理解を深める
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        2年次
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• コース選択指導</li>
                        <li>• インターンシップ実施</li>
                        <li>• 模擬試験実施</li>
                        <li>• 保護者面談</li>
                        <li>• 進路別講話</li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-xs text-green-700">
                          具体的な進路選択と準備
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        3年次
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 進路決定面談</li>
                        <li>• 受験・就職対策</li>
                        <li>• 面接指導</li>
                        <li>• 小論文指導</li>
                        <li>• 最終進路決定</li>
                      </ul>
                      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                        <p className="text-xs text-purple-700">
                          進路実現に向けた最終調整
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      進路指導体制
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-3">指導教員</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• 進路指導主事：総合的な進路指導</li>
                          <li>• 学年主任：学年に応じた指導</li>
                          <li>• 担任：個別面談・相談</li>
                          <li>• 教科担任：学習指導・補習</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-600 mb-3">外部連携</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• ハローワーク一関</li>
                          <li>• 大学・専門学校</li>
                          <li>• 地域企業</li>
                          <li>• 卒業生（先輩講話）</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 大学進学 */}
              <TabsContent value="university" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">大学進学支援</h3>
                  <p className="text-muted-foreground">
                    国公立・私立大学への進学を希望する生徒に対し、
                    きめ細かな学習指導を行っています。
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        学習サポート
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">補習・講習</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 放課後補習（平日毎日）</li>
                          <li>• 夏季集中講習（3週間）</li>
                          <li>• 冬季直前講習（1週間）</li>
                          <li>• 土曜講座（月2回）</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">個別指導</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 進学相談（随時）</li>
                          <li>• 学習計画指導</li>
                          <li>• 志望校選択相談</li>
                          <li>• 受験戦略アドバイス</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        入試対策
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">共通テスト対策</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 模擬試験（年6回）</li>
                          <li>• 過去問演習</li>
                          <li>• 弱点克服講座</li>
                          <li>• 時間配分指導</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">二次試験対策</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 記述問題演習</li>
                          <li>• 面接練習</li>
                          <li>• 小論文指導</li>
                          <li>• 志望理由書作成支援</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      過去5年間の合格実績
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">大学名</th>
                            <th className="text-center p-2">R3</th>
                            <th className="text-center p-2">R4</th>
                            <th className="text-center p-2">R5</th>
                            <th className="text-center p-2">R6</th>
                            <th className="text-center p-2">R7</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 font-medium">岩手大学</td>
                            <td className="p-2 text-center">8</td>
                            <td className="p-2 text-center">6</td>
                            <td className="p-2 text-center">9</td>
                            <td className="p-2 text-center">7</td>
                            <td className="p-2 text-center">10</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">岩手県立大学</td>
                            <td className="p-2 text-center">4</td>
                            <td className="p-2 text-center">5</td>
                            <td className="p-2 text-center">6</td>
                            <td className="p-2 text-center">4</td>
                            <td className="p-2 text-center">7</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">東北大学</td>
                            <td className="p-2 text-center">2</td>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2 text-center">3</td>
                            <td className="p-2 text-center">2</td>
                            <td className="p-2 text-center">2</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">東北学院大学</td>
                            <td className="p-2 text-center">15</td>
                            <td className="p-2 text-center">18</td>
                            <td className="p-2 text-center">12</td>
                            <td className="p-2 text-center">16</td>
                            <td className="p-2 text-center">14</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">岩手医科大学</td>
                            <td className="p-2 text-center">3</td>
                            <td className="p-2 text-center">4</td>
                            <td className="p-2 text-center">2</td>
                            <td className="p-2 text-center">5</td>
                            <td className="p-2 text-center">3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 就職支援 */}
              <TabsContent value="employment" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">就職支援</h3>
                  <p className="text-muted-foreground">
                    地域企業との強いつながりを活かし、
                    生徒の希望に応じた就職先を開拓・紹介しています。
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building className="h-5 w-5" />
                        就職指導プログラム
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">2年次</h4>
                        <ul className="text-sm space-y-1">
                          <li>• インターンシップ（5日間）</li>
                          <li>• 職場見学（複数企業）</li>
                          <li>• ビジネスマナー講習</li>
                          <li>• 就職ガイダンス</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">3年次</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 企業説明会（校内開催）</li>
                          <li>• 応募前職場見学</li>
                          <li>• 面接指導（個別・集団）</li>
                          <li>• 履歴書作成指導</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        就職実績
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">県内就職率</h4>
                        <div className="flex items-center gap-4">
                          <div className="text-2xl font-bold text-purple-600">85%</div>
                          <Progress value={85} className="flex-1 h-3" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          地元定着を重視した就職指導
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">主な就職先分野</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span>製造業</span>
                            <Badge variant="outline">35%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>建設業</span>
                            <Badge variant="outline">20%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>運輸・物流</span>
                            <Badge variant="outline">15%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>サービス業</span>
                            <Badge variant="outline">12%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>公務員</span>
                            <Badge variant="outline">10%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>その他</span>
                            <Badge variant="outline">8%</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      主な就職先企業
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-cyan-600 mb-3">製造業</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 東京エレクトロン東北㈱</li>
                          <li>• ㈱アイリスオーヤマ</li>
                          <li>• ㈱村田製作所</li>
                          <li>• 岩手キヤノン㈱</li>
                          <li>• ㈱関電工岩手支店</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3">運輸・インフラ</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 東日本旅客鉄道㈱</li>
                          <li>• 東北電力㈱</li>
                          <li>• 佐川急便㈱</li>
                          <li>• ヤマト運輸㈱</li>
                          <li>• 岩手県交通㈱</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-600 mb-3">公務員・その他</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 一関市役所</li>
                          <li>• 岩手県警察</li>
                          <li>• 陸上自衛隊</li>
                          <li>• 一関市消防本部</li>
                          <li>• ㈱みずほ銀行</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 年間計画 */}
              <TabsContent value="schedule" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">進路指導年間計画</h3>
                  <p className="text-muted-foreground">
                    3年間を通じて計画的に進路指導を実施し、
                    生徒の希望進路実現をサポートします。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-pink-600">🌸 春学期</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          進路希望調査
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          保護者説明会
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          進路ガイダンス
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          模擬試験
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-orange-600">🌻 夏学期</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          夏季補習
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          オープンキャンパス
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          企業見学
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          個別面談
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-orange-500">🍁 秋学期</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          就職試験開始
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          推薦入試対策
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          面接指導
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          進路決定調査
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center text-blue-600">❄️ 冬学期</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          一般入試対策
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          共通テスト
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          最終進路決定
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          卒業準備
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      月別詳細スケジュール（3年生）
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">月</th>
                            <th className="text-left p-2">大学進学</th>
                            <th className="text-left p-2">就職</th>
                            <th className="text-left p-2">専門学校</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 font-medium">4月</td>
                            <td className="p-2">進路希望調査・模試</td>
                            <td className="p-2">求人票研究</td>
                            <td className="p-2">学校選択</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">7月</td>
                            <td className="p-2">夏季補習・オープンキャンパス</td>
                            <td className="p-2">求人票解禁・企業見学</td>
                            <td className="p-2">体験入学</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">9月</td>
                            <td className="p-2">推薦入試対策</td>
                            <td className="p-2">就職試験開始</td>
                            <td className="p-2">AO入試</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">1月</td>
                            <td className="p-2">共通テスト・私大入試</td>
                            <td className="p-2">追加募集対応</td>
                            <td className="p-2">一般入試</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">進路相談・学習サポート</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              進路に関する相談や学習面でのサポートが必要でしたら、
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-serif">
                進路相談の申し込み
              </Button>
              <Button size="lg" variant="outline" className="font-serif">
                学習サポート詳細
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
