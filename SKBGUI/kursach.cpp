#include <GUI/GUI.h>
#include <Picture/Picture.h>
#include <iostream>
#include <Timer/Timer.h>
#include <Label/Label.h>
#include <math.h>
#include <fstream>

pGUI gui; // ���������� ���� �� ���������� sfml
const int speed = 32; //��������� ��������
const int DIR_TOP = 0; //��������� ����������
const int DIR_LEFT = 1; //��������� ����������
const int DIR_RIGHT = 2; //��������� ����������
const int DIR_DOWN = 3; //��������� ����������
const int DIR_STOP = 4; //��������� ����������
const int n=20; //������ �������� ����
const int m=25; //������ �������� ����
const int WALL   = -1;         // ������������ ������
const int BLANK  = -2;         // ��������� ������������ ������

struct Object // ��������� ������� �������� ����
{
    pPicture image; // �������� �������
    bool solid; // ������������ �������
    int item; // id ��������
    pLabel text; // ��������� ���� � ������� ������������ ����� �����
    pPicture item_image; // �������� ��������
    int n1; // ���������� ��� ������ �����
};

struct Character // ��������� ���������
{
    int i,j; // ���������� ���������
    pPicture image; // �������� ���������
    int scores; // ���� ��������� (������������ ������ � ������� �������)
};

Object Map[n][m]; // ������� �������� �������� ����
int direction = DIR_STOP; // ��������������� ���������� ����������� ������� �������
int fixDirection = DIR_STOP; // ��������������� ���������� ����������� ������� �������
int cnt = 0; //����� ���� ������� �������
int cntMove = 0; // ��������������� ���������� ���������� �����
int px[n * m], py[n * m];      // ���������� �����, �������� � ����
int len;                       // ����� ����
pTimer wolfMoveTimer = new Timer(); // ��������� ���������� sfml ��� ��������� ����������� �����
pTimer animationTimer = new Timer();// ��������� ���������� sfml ��� ��������� ����� ������� �������
pTimer zoneStepTimer = new Timer();// ��������� ���������� sfml ��� ��������� ���������� ����������� ������� �������
pTimer WolfSpeedTimer = new Timer();// ��������� ���������� sfml ��� ��������� ��������� �����
Character redcap; // ������� �������
Character wolf; // ����

bool gameover()
{
    if ((redcap.scores==7)||(wolf.i == redcap.i)&&(wolf.j==redcap.j||(redcap.scores==7)))
    {
        pLabel deadscreen = new Label();
        deadscreen->Model()->SetLocalCoord(190,200);
        deadscreen->Model()->SetCaption("GAME OVER");
        deadscreen->Model()->SetSize(500,100);
        gui->Model()->Add(deadscreen);
        wolfMoveTimer->Model()->SetEnabled(false);
        animationTimer->Model()->SetEnabled(false);
        zoneStepTimer->Model()->SetEnabled(false);
        return (true);
    }
    else
        return (false);

}

void myKeyDown(pComponentModel model, int key)
{
    if (key == sf::Keyboard::Escape)
        exit(0);
    if ((fixDirection != DIR_STOP) && (gameover()))
        return;
    if ((key == 3)&&(Map[redcap.i][redcap.j+1].solid!=true))  // right
    {
        direction = DIR_RIGHT;
        if (Map[redcap.i][redcap.j+1].item==1)
        {
            Map[redcap.i][redcap.j+1].item=0;
            redcap.scores++;
            if (gameover())
                return;
            gui->Model()->Delete(Map[redcap.i][redcap.j+1].item_image);

        }
    }
    if ((key == 22)&&(Map[redcap.i-1][redcap.j].solid!=true))  // top
    {
        direction = DIR_TOP;
        if (Map[redcap.i-1][redcap.j].item==1)
        {
            Map[redcap.i-1][redcap.j].item=0;
            redcap.scores++;
            if (redcap.scores==10)
            {
                gameover();
                return;
            }
            gui->Model()->Delete(Map[redcap.i-1][redcap.j].item_image);

        }
    }
    if ((key == 0)&&(Map[redcap.i][redcap.j-1].solid!=true))  // left
    {
        direction = DIR_LEFT;
        if (Map[redcap.i][redcap.j-1].item==1)
        {
            Map[redcap.i][redcap.j-1].item=0;
            redcap.scores++;
            if (redcap.scores==10)
            {
                gameover();
                return;
            }
            gui->Model()->Delete(Map[redcap.i][redcap.j-1].item_image);
        }
    }
    if ((key == 18)&&(Map[redcap.i+1][redcap.j].solid!=true))  // down
    {
        direction = DIR_DOWN;
        if (Map[redcap.i+1][redcap.j].item==1)
        {
            Map[redcap.i+1][redcap.j].item=0;
            redcap.scores++;
            if (redcap.scores==10)
            {
                gameover();
                return;
            }
            gui->Model()->Delete(Map[redcap.i+1][redcap.j].item_image);
        }
    }


};

void wave(int ax, int ay, int bx, int by)   // ����� ���� �� ������ (ax, ay) � ������ (bx, by)
{
    int dx[4] = {1, 0, -1, 0};   // ��������, ��������������� ������� ������
    int dy[4] = {0, 1, 0, -1};   // ������, �����, ����� � ������
    int d, x, y, k; // ��������������� ���������� ��� ��������� ���������
    bool stop; // ���� ��������� ��������� ���������

    for(int i=0; i<n; i++)
    {
        for(int j=0; j<m; j++)
        {
            Map[i][j].n1=BLANK;
            Map[i][j].text->Model()->SetCaption("");
            if (Map[i][j].solid==true)
            {
                Map[i][j].n1=WALL;
                Map[i][j].text->Model()->SetCaption("");
            }
            Map[i][j].text->Model()->SetColor(sf::Color(0x000000ff));
        }
    }
    if (Map[ay][ax].n1 == WALL || Map[by][bx].n1 == WALL)
        return;  // ������ (ay, ax) ��� (by, bx)- �����

    d = 0;                         // ��������������� �����
    Map[ay][ax].n1 = 0;            // ��������� ������ �������� 0
    Map[ay][ax].text->Model()->SetCaption("");
    do
    {
        stop = true;               // ������������, ��� ��� ��������� ������ ��� ��������
        for ( y = 0; y < n; y++ )
            for ( x = 0; x < m; x++ )
                if ( Map[y][x].n1 == d )                         // ������ �������� ������ d
                {
                    for ( k = 0; k < 4; k++ )                    // �������� �� ���� ������������ �������
                    {
                        int iy=y + dy[k], ix = x + dx[k];
                        if ( iy >= 0 && iy < n && ix >= 0 && ix < m && Map[iy][ix].n1 == BLANK )
                        {
                            stop = false;              // ������� ������������ ������
                            Map[iy][ix].n1 = d + 1;   // �������������� �����
                            int clr = std::floor(255 * d / (float)len);
                            Map[iy][ix].text->Model()->SetColor(sf::Color(255-clr, clr, 255, 255));
                            Map[iy][ix].text->Model()->SetCaption(std::to_string(d + 1));
                        }
                    }
                }
        d++;
    }
    while ( !stop && Map[by][bx].n1 == BLANK );

    if (Map[by][bx].n1 == BLANK)
        return;  // ���� �� ������

    // �������������� ����
    len = Map[by][bx].n1;// ����� ����������� ���� �� (ax, ay) � (bx, by)
    x = bx;
    y = by;
    d = len;
    while ( d > 0 )
    {
        px[d] = x;
        py[d] = y;                   // ���������� ������ (x, y) � ����
        d--;
        for (k = 0; k < 4; k++)
        {
            int iy=y + dy[k], ix = x + dx[k];
            if ( iy >= 0 && iy < n && ix >= 0 && ix < m && Map[iy][ix].n1 == d)
            {
                x = x + dx[k];
                y = y + dy[k];           // ��������� � ������, ������� �� 1 ����� � ������
            }
        }
    }
    px[0] = ax;
    py[0] = ay;
    cntMove=0;                // ������ px[0..len] � py[0..len] - ���������� ����� ����
    return;
}

void ontimer()
{

    if (fixDirection != DIR_STOP)
    {

        return;
    }

    sf::Vector2f coord = redcap.image->Model()->LocalCoord();
    fixDirection = direction;
    direction = DIR_STOP;
}

void timer2()
{

    if (fixDirection == DIR_STOP)
        return;

    sf::Vector2f coord = redcap.image->Model()->LocalCoord();
    int speed1 = speed / 10;
    if (fixDirection == DIR_RIGHT)  // right
    {
        coord.x += speed1;
        redcap.image->Model()->SetLocalCoord(coord);

    }
    if (fixDirection == DIR_TOP)  // top
    {
        coord.y -= speed1;
        redcap.image->Model()->SetLocalCoord(coord);


    }
    if (fixDirection == DIR_LEFT)  // left
    {
        coord.x -= speed1;
        redcap.image->Model()->SetLocalCoord(coord);


    }
    if (fixDirection == DIR_DOWN)  // down
    {
        coord.y += speed1;
        redcap.image->Model()->SetLocalCoord(coord);


    }
    if (fixDirection != DIR_STOP)
    {

        cnt ++;
    }

    if (cnt >= 10)
    {
        cnt = 0;
        if (fixDirection == DIR_DOWN)
        {
            redcap.i += 1;
        }
        if (fixDirection == DIR_LEFT)
        {
            redcap.j -= 1;
        }
        if (fixDirection == DIR_TOP)
        {
            redcap.i -= 1;
        }
        if (fixDirection == DIR_RIGHT)
        {
            redcap.j += 1;
        }
        coord.x = redcap.j * 32;
        coord.y = redcap.i * 32;
        redcap.image->Model()->SetLocalCoord(coord);
        wave(wolf.j,wolf.i,redcap.j,redcap.i);
        fixDirection = DIR_STOP;
        direction = DIR_STOP;


    }

}

void wolfMove()
{
    if (cntMove==0)
        cntMove++;
    wolf.j=px[cntMove];
    wolf.i=py[cntMove];
    if (gameover())
        return;
    wolf.image->Model()->SetLocalCoord(wolf.j*32,wolf.i*32-32);
    cntMove++;
}

void WolfSpeed()
{
    wolfMoveTimer->Model()->SetInterval(wolfMoveTimer->Model()->Interval() - sf::seconds(wolfMoveTimer->Model()->Interval().asSeconds() / 4.0));
}

int main()
{
    gui = new GUI(800, 640, "Red cap");
    cnt = 0;
    direction = DIR_STOP;
    fixDirection = DIR_STOP;
    ifstream fin;
    int c;

    fin.open("map.txt");
    if(!fin)
    {
        cout << "\nCan not open filemap.txt\n";
        system("PAUSE");
        return 0;
    }

    for(int i=0; i<n; i++)
    {
        for(int j=0; j<m; j++)
        {
            Map[i][j].image = new Picture();
            Map[i][j].text = new Label();
            Map[i][j].item=0;
            fin >> c;
            if (c==1)
            {
                Map[i][j].n1=WALL;
                Map[i][j].solid=true;
                Map[i][j].image->Model()->LoadFromFile("assets/images/grass.jpg");
            }
            else
            {
                Map[i][j].n1=BLANK;
                Map[i][j].image->Model()->LoadFromFile("assets/images/grass.png");
                if (c==3)
                {
                    Map[i][j].item=1;
                    Map[i][j].item_image = new Picture();
                    Map[i][j].item_image->Model()->LoadFromFile("assets/images/collect.png");
                    Map[i][j].item_image->Model()->SetSize(32,32);
                    Map[i][j].item_image->Model()->SetLocalCoord(j*32,i*32);
                    Map[i][j].item_image->Model()->Texture()->generateMipmap();


                }


            }

            Map[i][j].image->Model()->Texture()->generateMipmap();
            Map[i][j].image->Model()->SetSize(32,32);
            Map[i][j].image->Model()->SetLocalCoord(j*32,i*32);
            gui->Model()->Add(Map[i][j].image);

            Map[i][j].text->Model()->SetLocalCoord(j*32,i*32);
            Map[i][j].text->Model()->SetCaption("");
            Map[i][j].text->Model()->SetSize(20,20);
            if (c==3)
                gui->Model()->Add(Map[i][j].item_image);
            gui->Model()->Add(Map[i][j].text);
        }
    }

    if (fin.eof())
    {
        cout <<"\nFile map.txt is empty\n";
        system("PAUSE");
        return 0;
    }

    fin.close();
    redcap.image = new Picture();
    redcap.image->Model()->LoadFromFile("assets/images/redcap.png");
    redcap.image->Model()->Texture()->generateMipmap();
    redcap.i=1;
    redcap.j=1;
    redcap.image->Model()->SetSize(32,32);
    redcap.image->Model()->SetLocalCoord(32*redcap.j, 32*redcap.i);
    gui->Model()->Add(redcap.image);

    wolf.image = new Picture();
    wolf.image->Model()->LoadFromFile("assets/images/wolf.png");
    wolf.image->Model()->Texture()->generateMipmap();
    wolf.i=18;
    wolf.j=23;
    wolf.image->Model()->SetSize(32, 64);
    wolf.image->Model()->SetLocalCoord(32*wolf.j, 32*wolf.i-32);
    len = 59;
    wave(wolf.j,wolf.i,redcap.j,redcap.i);

    gui->Controller()->SetKeyDown(myKeyDown);
    zoneStepTimer->Model()->SetInterval(sf::seconds(0.1));
    zoneStepTimer->Model()->SetOnTimer(ontimer);
    zoneStepTimer->Model()->SetEnabled(true);
    gui->Model()->Add(zoneStepTimer);

    animationTimer->Model()->SetInterval(sf::seconds(0.01));
    animationTimer->Model()->SetOnTimer(timer2);
    animationTimer->Model()->SetEnabled(true);
    gui->Model()->Add(animationTimer);

    wolfMoveTimer->Model()->SetInterval(sf::seconds(1));
    wolfMoveTimer->Model()->SetOnTimer(wolfMove);
    wolfMoveTimer->Model()->SetEnabled(true);
    gui->Model()->Add(wolfMoveTimer);
    gui->Model()->Add(wolf.image);

    WolfSpeedTimer->Model()->SetInterval(sf::seconds(100));
    WolfSpeedTimer->Model()->SetOnTimer(WolfSpeed);
    WolfSpeedTimer->Model()->SetEnabled(true);
    gui->Model()->Add(WolfSpeedTimer);

    gui->loop();
    return 0;
}
