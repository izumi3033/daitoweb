import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User,
  MessageSquare,
  Building,
  Calendar,
  Info,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 実際の送信処理をここに実装
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-green-50 flex items-center justify-center">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="text-center p-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-4">送信完了</h2>
              <p className="text-green-700 mb-6">
                お問い合わせありがとうございました。<br />
                3営業日以内にご連絡いたします。
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                新しいお問い合わせ
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          <div className="relative container h-full flex items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-4">お問い合わせ</h1>
              <p className="text-xl font-medium">岩手県立大東高等学校へのお問い合わせ</p>
              <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
                お気軽にご連絡ください
              </Badge>
            </div>
          </div>
        </section>

        {/* 連絡先情報 */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">学校連絡先</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                お電話またはメールでお気軽にお問い合わせください。
                担当者が丁寧にご対応いたします。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <Phone className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <CardTitle>事務室</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">0191-75-3116</p>
                  <p className="text-sm text-muted-foreground">
                    平日 8:00-17:00<br />
                    土曜 8:00-16:00
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Phone className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <CardTitle>職員室</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-green-600 mb-2">0191-75-3369</p>
                  <p className="text-sm text-muted-foreground">
                    平日 8:00-17:00<br />
                    授業時間外推奨
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Mail className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                  <CardTitle>メール</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-purple-600 mb-2">daito-h@pref.iwate.jp</p>
                  <p className="text-sm text-muted-foreground">
                    24時間受付<br />
                    返信：1-2営業日
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 mx-auto text-orange-600 mb-2" />
                  <CardTitle>所在地</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-semibold text-orange-600 mb-2">
                    〒029-0523<br />
                    岩手県一関市大東町摺沢字堀河ノ沢34番4号
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* お問い合わせフォーム */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  お問い合わせフォーム
                </CardTitle>
                <p className="text-muted-foreground">
                  以下のフォームからお問い合わせいただけます。必須項目をご記入の上、送信してください。
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        お名前 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="山田 太郎"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        メールアドレス <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="example@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        電話番号
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="090-1234-5678"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        お問い合わせ種別 <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="種別を選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admission">入学・受験について</SelectItem>
                          <SelectItem value="school-life">学校生活について</SelectItem>
                          <SelectItem value="career">進路・就職について</SelectItem>
                          <SelectItem value="club">部活動について</SelectItem>
                          <SelectItem value="event">学校行事について</SelectItem>
                          <SelectItem value="visit">学校見学について</SelectItem>
                          <SelectItem value="media">取材・メディア関係</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      件名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="お問い合わせの件名をご記入ください"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="お問い合わせの詳細をご記入ください"
                      rows={6}
                      required
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-2">ご注意事項</p>
                        <ul className="space-y-1 text-xs">
                          <li>• お問い合わせいただいた内容につきましては、3営業日以内にご返答いたします。</li>
                          <li>• 緊急のお問い合わせの場合は、直接お電話でご連絡ください。</li>
                          <li>• いただいた個人情報は、お問い合わせ対応以外の目的では使用いたしません。</li>
                          <li>• 土日祝日および学校休業日のお問い合わせは、翌営業日以降の対応となります。</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full font-serif text-lg h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        お問い合わせを送信
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">よくある質問</h2>
              <p className="text-muted-foreground">
                お問い合わせの多いご質問をまとめました
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">入学・受験について</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Q. 入学試験の日程はいつですか？</h4>
                    <p className="text-sm text-muted-foreground">A. 例年3月上旬に実施しています。詳細は中学校経由で配布される募集要項をご確認ください。</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-1">Q. 学校見学はできますか？</h4>
                    <p className="text-sm text-muted-foreground">A. はい。事前にお申し込みいただければ、平日の授業見学が可能です。文化祭や体験入学も実施しています。</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-1">Q. 通学方法について教えてください</h4>
                    <p className="text-sm text-muted-foreground">A. JR大船渡線摺沢駅から徒歩15分、スクールバスも運行しています。詳細はアクセスページをご覧ください。</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">学校生活について</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Q. 部活動はどのようなものがありますか？</h4>
                    <p className="text-sm text-muted-foreground">A. 運動部11部、文化部8部があります。多くの生徒が活動に参加し、県大会出場を目指しています。</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-1">Q. 制服はありますか？</h4>
                    <p className="text-sm text-muted-foreground">A. はい。男女ともに制服があります。入学前の説明会で詳細をご案内いたします。</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-1">Q. 進路サポートは充実していますか？</h4>
                    <p className="text-sm text-muted-foreground">A. 1年次から3年次まで系統的な進路指導を実施し、98.5%の進路実現率を誇っています。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 受付時間・アクセス */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6" />
                    受付時間
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">平日（月〜金）</span>
                      <span className="text-muted-foreground">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">土曜日</span>
                      <span className="text-muted-foreground">8:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">日曜日・祝日</span>
                      <span className="text-red-600">休校</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      <strong>休校期間：</strong>春季・夏季・冬季休業期間、学校行事等により変更になる場合があります。
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6" />
                    アクセス情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">所在地</h4>
                    <p className="text-sm text-muted-foreground">
                      〒029-0523<br />
                      岩手県一関市大東町摺沢字堀河ノ沢34番4号
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">主なアクセス方法</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• JR大船渡線 摺沢駅より徒歩15分</li>
                      <li>• 一関駅からバスで40分</li>
                      <li>• 東北自動車道一関ICから車で25分</li>
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/access">詳しいアクセス情報</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
