import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Calendar,
  Heart,
  Target,
  Sparkles,
  Building2,
  MapPin
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/school-life.jpg')" }}
          />
          <div className="relative container h-full flex items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-4">学校案内</h1>
              <p className="text-xl font-medium">伝統と革新が調和する学び舎</p>
              <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
                創立100周年記念 令和7年度
              </Badge>
            </div>
          </div>
        </section>

        {/* 学校概要 */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">学校概要</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                岩手県立大東高等学校は、地域に根ざした教育を通じて、
                確かな学力と豊かな人間性を育む学校です。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 基本情報 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    基本情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">学校名</p>
                      <p className="font-medium">岩手県立大東高等学校</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">設立年</p>
                      <p className="font-medium">大正14年（1925年）</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">課程</p>
                      <p className="font-medium">全日制 普通科</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">生徒数</p>
                      <p className="font-medium">約300名</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">所在地</p>
                        <p className="font-medium text-sm leading-relaxed">
                          〒029-0523<br />
                          岩手県一関市大東町摺沢字堀河ノ沢34番4号
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 教育目標 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    教育目標
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">豊かな人間性の育成</h4>
                        <p className="text-sm text-muted-foreground">思いやりの心と責任感を持つ人材の育成</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">確かな学力の向上</h4>
                        <p className="text-sm text-muted-foreground">主体的な学習態度と基礎学力の定着</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">地域貢献意識の醸成</h4>
                        <p className="text-sm text-muted-foreground">地域を愛し、社会に貢献する人材の育成</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 詳細情報タブ */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <Tabs defaultValue="history" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="history">沿革</TabsTrigger>
                <TabsTrigger value="curriculum">教育課程</TabsTrigger>
                <TabsTrigger value="facilities">施設・設備</TabsTrigger>
                <TabsTrigger value="achievements">実績・特色</TabsTrigger>
              </TabsList>

              {/* 沿革 */}
              <TabsContent value="history" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      学校沿革
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="relative border-l-4 border-primary pl-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <div>
                          <h4 className="font-bold text-primary">大正14年（1925年）</h4>
                          <p className="text-sm text-muted-foreground">岩手県立大東中学校として開校</p>
                        </div>
                      </div>
                      
                      <div className="relative border-l-4 border-primary pl-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <div>
                          <h4 className="font-bold text-primary">昭和23年（1948年）</h4>
                          <p className="text-sm text-muted-foreground">学制改革により岩手県立大東高等学校に改称</p>
                        </div>
                      </div>

                      <div className="relative border-l-4 border-primary pl-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <div>
                          <h4 className="font-bold text-primary">昭和50年（1975年）</h4>
                          <p className="text-sm text-muted-foreground">創立50周年記念式典挙行</p>
                        </div>
                      </div>

                      <div className="relative border-l-4 border-primary pl-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <div>
                          <h4 className="font-bold text-primary">平成17年（2005年）</h4>
                          <p className="text-sm text-muted-foreground">創立80周年記念式典挙行</p>
                        </div>
                      </div>

                      <div className="relative border-l-4 border-green-600 pl-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-green-600"></div>
                        <div>
                          <h4 className="font-bold text-green-600">令和7年（2025年）</h4>
                          <p className="text-sm text-muted-foreground">創立100周年記念式典予定</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 教育課程 */}
              <TabsContent value="curriculum" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      教育課程
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">1年次</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>国語・数学・英語</span>
                            <Badge variant="outline">基礎重視</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>理科・社会</span>
                            <Badge variant="outline">幅広い学習</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>体育・芸術</span>
                            <Badge variant="outline">心身の発達</Badge>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">2・3年次</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>進学コース</span>
                            <Badge variant="default">大学進学対応</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>就職コース</span>
                            <Badge variant="default">実践的指導</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span>総合的な探究の時間</span>
                            <Badge variant="default">課題解決能力</Badge>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">特色ある教育活動</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• 地域連携プログラム</li>
                        <li>• 国際理解教育</li>
                        <li>• キャリア教育の充実</li>
                        <li>• ICT教育の推進</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 施設・設備 */}
              <TabsContent value="facilities" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">普通教室</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• 18教室（各学年6クラス）</li>
                        <li>• 電子黒板完備</li>
                        <li>• 冷暖房設備</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">特別教室</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• 理科実験室（物理・化学・生物）</li>
                        <li>• 音楽室・美術室</li>
                        <li>• 家庭科実習室</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">体育施設</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• 体育館（バスケット2面）</li>
                        <li>• 武道館（柔道・剣道）</li>
                        <li>• グラウンド（400mトラック）</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">図書館</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• 蔵書数約15,000冊</li>
                        <li>• 自習スペース完備</li>
                        <li>• パソコン利用可能</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">IT設備</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• パソコン教室2室</li>
                        <li>• タブレット端末</li>
                        <li>• 校内Wi-Fi完備</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">その他</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• 食堂・売店</li>
                        <li>• 保健室</li>
                        <li>• 相談室</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 実績・特色 */}
              <TabsContent value="achievements" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        主な実績
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">学習面</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• 国公立大学合格者数県内上位</li>
                          <li>• 各種検定試験合格率向上</li>
                          <li>• 学習習慣定着率90%以上</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">部活動</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• 陸上部 県大会入賞</li>
                          <li>• 吹奏楽部 東北大会出場</li>
                          <li>• 文芸部 全国大会入選</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        特色ある取り組み
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">地域連携</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• 地域企業インターンシップ</li>
                          <li>• 小中学校学習支援ボランティア</li>
                          <li>• 地域イベント参加・企画</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">国際交流</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• ALT常駐による英語教育</li>
                          <li>• 海外修学旅行プログラム</li>
                          <li>• 国際理解講座の実施</li>
                        </ul>
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
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">学校見学・お問い合わせ</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              学校見学や入学に関するご質問など、
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-serif">
                学校見学の申し込み
              </Button>
              <Button size="lg" variant="outline" className="font-serif">
                資料請求
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
