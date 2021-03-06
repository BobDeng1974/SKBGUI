#pragma once
#include <base.h>
#include <SFML/Graphics.hpp>
#include <iostream>
#include <stdio.h>
#include <string>
#include <vector>
#include <Component/Component.h>
#include <Component/ComponentViewer.h>
using namespace std;
using namespace sf;

   class ComponentModel
{
     public:
     //������
         ComponentModel();
         virtual ~ComponentModel();

         virtual string Name();
         virtual void SetName(string StName);
         virtual Vector2f LocalCoord();
         virtual void SetLocalCoord(double x,double y);
         virtual void SetLocalCoord(Vector2f ComCoord);
         virtual Vector2f Size();
         virtual void SetSize(double x,double y);
         virtual void SetSize(Vector2f ComSize);
         virtual void SetState(int state);
         virtual int State();
         virtual void SetFocus(bool focus);
         virtual bool Focus();
         virtual void SetParent(pComponentModel parrent);
         virtual pComponentModel Parent();
         virtual void Add(pComponent child);
         virtual std::string Info();
         virtual pComponent Find(string StName);
         virtual pComponent FindAll(std::string name);
         virtual void Delete(pComponent children);
         virtual void Delete(string ChName);
         virtual pComponent Children(int index);
         virtual void SetChildren(int index, pComponent component);
         int Count();
         virtual bool VisibleBorders();
         virtual void SetVisibleBorders(bool visibleBorders);
         Vector2f AbsoluteCoord();
         void SetAbsoluteCoord(Vector2f Abs);
         void SetEnabled(bool enabled);
         bool Enabled();
         bool Visible();
         void SetVisible(bool visible);
         void Show();
         void Hide();

         virtual std::string SerializeToString();
         virtual void DeserializeFromString(std::string s);

         std::string Class();
         pComponent Owner();
         void SetOwner(pComponent owner);
         sf::RenderStates RenderStates();
         void SetRenderStates(sf::RenderStates renderStates);
         bool ViewLimit();
         void SetViewLimit(bool viewLimit);
         virtual double Angle();
         void SetAngle(double angle);
         void Move(sf::Vector2f offset); // ���������� ��������� �� ������ offset
         void Rotate(double angle); //������������ ��������� �� ���� angle

         bool requestViewerUpdate;

     protected:
        void SetClass(std::string _class);
        std::string __class;


     private:
    //����
         string name;
         Vector2f __absoluteCoord;
         Vector2f __localCoord;//���������� ������ �������� ����
         sf::RenderStates __renderStates;
         Vector2f __size;//������ � ������
         pComponentModel __parent;//������ �� ������
         vector<pComponent> __children;//������ ������ �� ��������
         //Renderer* __renderer;//��� ��������(�������� ��� ���)
         double __angle;
         int __state;//���������
         bool __focus;//������� � ���� ����������� ��� ���
         bool __visibleBorders;
         bool __isVisible; // ������� ��������� ��� ���
         bool __ViewLimit;
         pComponent __owner;
         bool __enabled;



         friend ComponentController;
         friend ComponentViewer;
         friend Component;




};
