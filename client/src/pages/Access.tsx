import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Bus, Car, Train, Mail } from "lucide-react";
import SchoolMap from "@/components/SchoolMap";
import SimpleMap from "@/components/SimpleMap";
import AlternativeMap from "@/components/AlternativeMap";

export default function Access() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-96 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/access-bg.jpg')" }}
          />
          <div className="relative container h-full flex items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-4">アクセス</h1>
              <p className="text-xl font-medium">岩手県立大東高等学校への交通案内</p>
            </div>
          </div>
        </section>

        {/* 代替マップ表示 */}
        <section className="py-8 bg-green-50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-4">📍 学校位置マップ</h2>
            <AlternativeMap />
          </div>
        </section>

        {/* 基本情報 */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 学校情報 */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">学校情報</h2>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      所在地
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold">岩手県立大東高等学校</p>
                      <p className="text-muted-foreground">〒029-0523</p>
                      <p className="text-muted-foreground">岩手県一関市大東町摺沢字堀河ノ沢34番4号</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-semibold">事務室</p>
                          <p className="text-sm text-muted-foreground">0191-75-3116</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-semibold">職員室</p>
                          <p className="text-sm text-muted-foreground">0191-75-3369</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-semibold">メールアドレス</p>
                        <p className="text-sm text-muted-foreground">daito-h@pref.iwate.jp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      開校時間
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">平日</span>
                        <span className="text-muted-foreground">8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">土曜日</span>
                        <span className="text-muted-foreground">8:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">日曜日・祝日</span>
                        <span className="text-muted-foreground">休校</span>
                      </div>
                      <div className="pt-2 border-t text-sm text-muted-foreground">
                        ※行事等により変更になる場合があります
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 地図 */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">校舎位置</h2>
                <SchoolMap className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* 交通アクセス */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">交通アクセス</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 電車でのアクセス */}
              <Card>
                <CardHeader>
                  <Train className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle>電車でお越しの場合</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold mb-2">JR大船渡線</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• 摺沢駅下車 → 徒歩約15分</p>
                        <p>• 陸中門崎駅下車 → 徒歩約20分</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-blue-800 mb-1">主要駅からの所要時間</p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• 一ノ関駅から約30分</li>
                        <li>• 盛岡駅から約90分</li>
                        <li>• 仙台駅から約120分</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* バスでのアクセス */}
              <Card>
                <CardHeader>
                  <Bus className="h-8 w-8 text-green-600 mb-4" />
                  <CardTitle>バスでお越しの場合</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-semibold mb-2">岩手県交通</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• 一関駅前 → 大東高校前</p>
                        <p>• 所要時間：約40分</p>
                        <p>• 運賃：520円</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-800 mb-1">スクールバス運行</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• 千厩方面</li>
                        <li>• 室根方面</li>
                        <li>• 藤沢方面</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 車でのアクセス */}
              <Card>
                <CardHeader>
                  <Car className="h-8 w-8 text-orange-600 mb-4" />
                  <CardTitle>お車でお越しの場合</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-600 pl-4">
                      <h4 className="font-semibold mb-2">主要道路からのアクセス</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• 国道343号線「摺沢」交差点から約3分</p>
                        <p>• 東北自動車道一関ICから約25分</p>
                        <p>• 東北自動車道平泉前沢ICから約30分</p>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-orange-800 mb-1">駐車場について</p>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• 来校者用駐車場完備</li>
                        <li>• 大型バス駐車可能</li>
                        <li>• 事前連絡推奨</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* お問い合わせCTA */}
        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">アクセスに関するお問い合わせ</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              交通手段や所要時間など、アクセスに関するご質問がございましたら、
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-serif">
                <Phone className="h-4 w-4 mr-2" />
                電話で問い合わせ
              </Button>
              <Button size="lg" variant="outline" className="font-serif">
                <Mail className="h-4 w-4 mr-2" />
                メールで問い合わせ
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
