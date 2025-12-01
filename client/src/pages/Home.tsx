import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, MapPin, Users, Trophy, BookOpen, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home.jpg" 
            alt="岩手県立大東高等学校 校舎" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent px-4 py-1 text-sm backdrop-blur-sm">
            令和7年度 創立100周年
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight drop-shadow-lg">
            伝統を誇り、<br className="md:hidden" />未来を磨く。
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
            岩手県立大東高等学校は、地域と共に歩み、<br />
            一人ひとりの可能性を最大限に伸ばす学び舎です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/about">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-serif min-w-[160px]">
                学校案内
              </Button>
            </Link>
            <Link href="/admission">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20 font-serif min-w-[160px]">
                中学生の方へ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <h2 className="text-xl font-serif font-bold text-primary">重要なお知らせ</h2>
          </div>
          <div className="grid gap-4">
            <Card className="border-l-4 border-l-destructive shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs">重要</Badge>
                    <span className="text-sm text-muted-foreground">2025.07.08</span>
                  </div>
                  <h3 className="font-bold text-lg">名簿に関わる電話にご注意ください</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    100周年事業の一環として同窓生名簿を作成しておりますが、業者を語る不審な電話が増えています。
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="shrink-0 text-primary hover:text-primary/80 hover:bg-primary/5">
                  詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News & Topics */}
      <section className="py-20 container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-accent font-bold tracking-wider text-sm uppercase">News & Topics</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">大東高校の「今」</h2>
          </div>
          <Link href="/news">
            <Button variant="outline" className="font-serif">
              記事一覧へ <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/club-activities.jpg" 
                alt="鹿踊部" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground hover:bg-primary">部活動</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">2025.10.24</div>
              <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                四ツ角楽市で鹿踊部が演舞を披露しました
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3">
                8月14日（木）大東町摺沢で行われた四ツ角楽市で、鹿踊部が演舞しました。地元の本屋である小原書店様の駐車場にて、堂々とした舞を披露しました。
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="p-0 h-auto text-primary font-serif group-hover:translate-x-1 transition-transform">
                続きを読む <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* News Item 2 */}
          <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Trophy className="h-12 w-12 text-muted-foreground/50" />
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground hover:bg-primary">大会結果</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">2025.10.24</div>
              <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                陸上東北選手権出場報告
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3">
                8月23日（土）3年金野さんが岩手県代表としてやり投で出場しました。記録は36m70で予選敗退となりましたが、全力を尽くしました。
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="p-0 h-auto text-primary font-serif group-hover:translate-x-1 transition-transform">
                続きを読む <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* News Item 3 */}
          <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/school-life.jpg" 
                alt="インターンシップ" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground hover:bg-primary">進路・学習</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">2025.10.24</div>
              <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                インターンシップ（職場体験）を実施
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3">
                8月21日（水）～23日（金）インターンシップが行われました。それぞれ希望する場所で職場体験を行い、働くことの意義を学びました。
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="p-0 h-auto text-primary font-serif group-hover:translate-x-1 transition-transform">
                続きを読む <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/history-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent">大東高校の特色</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              100年の歴史の中で培われた伝統と、新しい時代に対応した教育プログラム。<br />
              生徒一人ひとりの「なりたい自分」を実現するための環境がここにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors text-center space-y-4">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold">多様な進路実現</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                進学から就職まで、一人ひとりの希望に合わせたきめ細やかな指導を行います。模擬株式会社DjoBなど、実践的なキャリア教育も充実しています。
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors text-center space-y-4">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold">地域との連携</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                鹿踊部をはじめとする郷土芸能の継承や、地域企業との連携活動を通じて、地域社会に貢献できる人材を育成します。
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors text-center space-y-4">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold">充実した学校行事</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                体育祭、文化祭、クラスマッチなど、生徒が主体となって創り上げる行事が目白押し。仲間と共に成長する青春の1ページです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-accent font-bold tracking-wider text-sm uppercase">Access</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">アクセス</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              自然豊かな環境に囲まれた学び舎。<br />
              JR大船渡線「摺沢駅」から徒歩圏内で、通学にも便利です。
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary">所在地</h4>
                  <p className="text-muted-foreground">〒029-0523<br />岩手県一関市大東町摺沢字堀河ノ沢34番4号</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-primary text-xs border border-primary rounded px-1">JR</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">最寄り駅</h4>
                  <p className="text-muted-foreground">JR大船渡線「摺沢駅」より徒歩約15分</p>
                </div>
              </div>
            </div>

            <Link href="/access">
              <Button className="mt-4 font-serif bg-primary text-primary-foreground hover:bg-primary/90">
                詳細な地図を見る
              </Button>
            </Link>
          </div>
          
          <div className="bg-muted rounded-lg overflow-hidden h-[400px] shadow-inner border border-border">
            {/* Placeholder for Map */}
            <div className="w-full h-full flex items-center justify-center bg-muted-foreground/10">
              <p className="text-muted-foreground font-serif">Google Maps Area</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
