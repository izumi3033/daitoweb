import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  FileText, 
  Users, 
  GraduationCap,
  CheckCircle,
  AlertTriangle,
  Download,
  Phone,
  MapPin,
  DollarSign,
  BookOpen,
  Target,
  Award,
  Clipboard,
  Mail,
  Calculator
} from "lucide-react";

export default function Admission() {
  const examSchedule = [
    {
      type: "推薦入学試験",
      applicationPeriod: "令和6年11月1日（金）～11月7日（木）",
      examDate: "令和6年11月14日（木）",
      announcementDate: "令和6年11月21日（木）",
      subjects: ["面接", "作文"],
      eligibility: "中学校長の推薦を受けた者"
    },
    {
      type: "一般入学試験（前期）",
      applicationPeriod: "令和7年1月6日（月）～1月10日（金）",
      examDate: "令和7年1月16日（木）",
      announcementDate: "令和7年1月23日（木）",
      subjects: ["国語", "数学", "英語", "面接"],
      eligibility: "中学校卒業見込みの者"
    },
    {
      type: "一般入学試験（後期）",
      applicationPeriod: "令和7年2月3日（月）～2月7日（金）",
      examDate: "令和7年2月13日（木）",
      announcementDate: "令和7年2月20日（木）",
      subjects: ["国語", "数学", "面接"],
      eligibility: "前期試験不合格者等"
    }
  ];

  const tuitionFees = [
    { category: "入学金", amount: "50,000円", timing: "入学時のみ" },
    { category: "授業料", amount: "25,000円/月", timing: "月額" },
    { category: "施設費", amount: "8,000円/月", timing: "月額" },
    { category: "教育充実費", amount: "5,000円/月", timing: "月額" },
    { category: "生徒会費", amount: "500円/月", timing: "月額" },
    { category: "PTA会費", amount: "1,000円/月", timing: "月額" }
  ];

  const scholarships = [
    {
      name: "学業特待生制度",
      criteria: "入学試験成績上位者",
      benefit: "授業料50%免除（3年間）",
      requirements: "各学期の成績が一定水準以上"
    },
    {
      name: "スポーツ特待生制度", 
      criteria: "スポーツ実績優秀者",
      benefit: "授業料30%免除（3年間）",
      requirements: "部活動への参加継続"
    },
    {
      name: "兄弟姉妹減免制度",
      criteria: "兄弟姉妹が同時在学",
      benefit: "下の学年の授業料20%免除",
      requirements: "同時在学期間中"
    },
    {
      name: "経済支援奨学金",
      criteria: "家計急変等の経済的困窮",
      benefit: "授業料等の一部免除",
      requirements: "年収基準・審査あり"
    }
  ];

  const documents = [
    { name: "入学願書", description: "本校指定様式", required: true },
    { name: "調査書", description: "中学校長作成・厳封", required: true },
    { name: "推薦書", description: "推薦入試のみ", required: false },
    { name: "受験料", description: "15,000円", required: true },
    { name: "写真", description: "3cm×4cm 3枚", required: true },
    { name: "返信用封筒", description: "切手貼付済み", required: true }
  ];

  const preparation = [
    {
      subject: "国語",
      points: [
        "中学校3年間の基礎的な漢字・語彙",
        "文章読解力（説明文・物語文）", 
        "作文・小論文の基本的な構成力"
      ]
    },
    {
      subject: "数学",
      points: [
        "1次方程式・連立方程式",
        "関数・グラフの基本",
        "図形の性質・計算"
      ]
    },
    {
      subject: "英語", 
      points: [
        "基本的な文法（中学校範囲）",
        "語彙力（中学校で学習する単語）",
        "リスニング・簡単な会話表現"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          <div className="relative container h-full flex items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-4">入試情報</h1>
              <p className="text-xl font-medium">令和7年度入学試験について</p>
            </div>
          </div>
        </section>

        {/* 入試日程・概要 */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">令和7年度入学試験日程</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                複数の入試制度をご用意しています。詳細をご確認の上、お申し込みください
              </p>
            </div>

            <div className="space-y-8">
              {examSchedule.map((exam, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <GraduationCap className="h-5 w-5" />
                      {exam.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <FileText className="h-4 w-4" />
                          出願期間
                        </div>
                        <p className="font-semibold">{exam.applicationPeriod}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          試験日
                        </div>
                        <p className="font-semibold text-primary">{exam.examDate}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <CheckCircle className="h-4 w-4" />
                          合格発表
                        </div>
                        <p className="font-semibold">{exam.announcementDate}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <BookOpen className="h-4 w-4" />
                          試験科目
                        </div>
                        <div className="space-y-1">
                          {exam.subjects.map((subject, subjectIndex) => (
                            <Badge key={subjectIndex} variant="secondary" className="mr-1">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
                        <Users className="h-4 w-4" />
                        受験資格
                      </div>
                      <p className="text-sm">{exam.eligibility}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* タブセクション */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <Tabs defaultValue="documents" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="documents">出願書類</TabsTrigger>
                <TabsTrigger value="fees">学費・奨学金</TabsTrigger>
                <TabsTrigger value="preparation">試験対策</TabsTrigger>
                <TabsTrigger value="access">アクセス</TabsTrigger>
              </TabsList>

              {/* 出願書類 */}
              <TabsContent value="documents" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">出願に必要な書類</h3>
                  <p className="text-muted-foreground mb-8">
                    出願締切日の17:00までに本校事務室へ直接持参または郵送してください
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg ${doc.required ? 'bg-red-100' : 'bg-blue-100'}`}>
                            <FileText className={`h-5 w-5 ${doc.required ? 'text-red-600' : 'text-blue-600'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{doc.name}</h4>
                              <Badge variant={doc.required ? "destructive" : "secondary"}>
                                {doc.required ? "必須" : "該当者のみ"}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-800">
                      <AlertTriangle className="h-5 w-5" />
                      重要なお知らせ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-yellow-800">
                    <ul className="space-y-2 text-sm">
                      <li>• 出願書類は返却いたしませんので、あらかじめご了承ください</li>
                      <li>• 調査書は中学校長が作成し、厳封されたもの</li>
                      <li>• 受験料は現金のみ（釣り銭のないよう準備してください）</li>
                      <li>• 郵送の場合は書留郵便をご利用ください</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 学費・奨学金 */}
              <TabsContent value="fees" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">学費・奨学金制度</h3>
                  <p className="text-muted-foreground mb-8">
                    学費の詳細と各種奨学金制度についてご案内します
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 学費 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-green-600" />
                        学費一覧
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {tuitionFees.map((fee, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <div>
                              <p className="font-medium">{fee.category}</p>
                              <p className="text-sm text-muted-foreground">{fee.timing}</p>
                            </div>
                            <p className="font-bold text-green-700">{fee.amount}</p>
                          </div>
                        ))}
                        
                        <div className="pt-4 border-t">
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">月額合計</h4>
                            <p className="text-2xl font-bold text-primary">39,500円</p>
                            <p className="text-sm text-muted-foreground mt-1">※入学金は初回のみ</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 奨学金制度 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        奨学金制度
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {scholarships.map((scholarship, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <h4 className="font-semibold text-blue-700 mb-2">{scholarship.name}</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">対象：</span>
                                <span className="text-muted-foreground">{scholarship.criteria}</span>
                              </div>
                              <div>
                                <span className="font-medium">特典：</span>
                                <span className="text-green-600">{scholarship.benefit}</span>
                              </div>
                              <div>
                                <span className="font-medium">条件：</span>
                                <span className="text-muted-foreground">{scholarship.requirements}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-800">その他の支援制度</CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">国・県の支援制度</h4>
                        <ul className="space-y-1">
                          <li>• 高等学校等就学支援金</li>
                          <li>• 岩手県奨学給付金</li>
                          <li>• 生活保護世帯等奨学給付金</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">その他</h4>
                        <ul className="space-y-1">
                          <li>• 交通費補助制度</li>
                          <li>• 制服リサイクル制度</li>
                          <li>• 教科書購入補助</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 試験対策 */}
              <TabsContent value="preparation" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">試験対策・学習ポイント</h3>
                  <p className="text-muted-foreground mb-8">
                    各科目の出題傾向と学習のポイントをご紹介します
                  </p>
                </div>

                <div className="space-y-6">
                  {preparation.map((subject, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          {subject.subject}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {subject.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clipboard className="h-5 w-5 text-blue-600" />
                        面接試験について
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 個人面接（約10分）</li>
                        <li>• 志望動機・将来の目標</li>
                        <li>• 中学校での活動・経験</li>
                        <li>• 本校への入学意欲</li>
                        <li>• 基本的な社会常識</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-600" />
                        作文試験について
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• 600字程度の作文</li>
                        <li>• 制限時間：50分</li>
                        <li>• テーマ：社会問題・身近な話題</li>
                        <li>• 論理的な構成・表現力</li>
                        <li>• 誤字脱字に注意</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* アクセス */}
              <TabsContent value="access" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">試験会場・アクセス</h3>
                  <p className="text-muted-foreground mb-8">
                    試験は本校にて実施いたします。公共交通機関をご利用ください
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-red-600" />
                        試験会場
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">岩手県立大東高等学校</h4>
                        <p className="text-muted-foreground">〒029-0523 岩手県一関市大東町大原字川内128</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-blue-600">JRご利用の場合</h5>
                          <p className="text-sm text-muted-foreground">
                            JR大船渡線「摺沢駅」下車、徒歩15分<br />
                            または岩手県交通バス「大東高校前」下車
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-green-600">お車でお越しの場合</h5>
                          <p className="text-sm text-muted-foreground">
                            東北自動車道「一関IC」から約20分<br />
                            ※保護者用駐車場をご用意しています
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h5 className="font-medium mb-2 flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          お問い合わせ
                        </h5>
                        <p className="text-sm">
                          <strong>電話：</strong>0191-75-3369<br />
                          <strong>受付時間：</strong>平日 8:30-17:00
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-purple-600" />
                        試験当日の注意事項
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                          <span>受付開始：8:30～（遅刻厳禁）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                          <span>受験票・筆記用具・昼食を持参</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                          <span>携帯電話は電源を切って提出</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                          <span>制服または私服（華美でないもの）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                          <span>保護者控室をご用意しています</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                        <div className="flex items-center gap-2 text-yellow-800 mb-2">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="font-semibold">天候による変更について</span>
                        </div>
                        <p className="text-sm text-yellow-700">
                          悪天候等により試験日程に変更がある場合は、
                          本校ホームページおよび緊急連絡網にてお知らせいたします。
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* 資料請求・説明会 */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">入試説明会・資料請求</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                入試についてのより詳しい情報は、入試説明会への参加や資料請求をご利用ください
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    入試説明会
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      入試制度の詳細説明、学校見学、個別相談を実施します。
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">第1回：令和6年10月12日（土）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">第2回：令和6年11月16日（土）</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>時間：9:30～12:00</span>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      説明会に申し込む
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    資料請求
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      学校案内パンフレット、入試要項等の資料をお送りします。
                    </p>
                    
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>学校案内パンフレット</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>入学試験要項</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>入学願書一式</span>
                      </li>
                    </ul>

                    <div className="space-y-2">
                      <Button className="w-full" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        資料をダウンロード
                      </Button>
                      <Button className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        郵送で資料請求
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">入試についてのお問い合わせ</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              入試に関するご質問やご不明な点がございましたら、お気軽にお問い合わせください。
              丁寧にご説明させていただきます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-serif">
                <Phone className="h-4 w-4 mr-2" />
                電話で問い合わせ
              </Button>
              <Button size="lg" variant="outline" className="font-serif border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
