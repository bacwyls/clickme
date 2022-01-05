/-  *clickme
/+  default-agent, dbug
::
|%
+$  versioned-state
  $%  state-0
  ==
+$  state-0  $:
  %0
  =points
  ==
+$  card     card:agent:gall
--
%-  agent:dbug
=|  state-0
=*  state  -
^-  agent:gall
|_  =bowl:gall
+*  this  .
    def   ~(. (default-agent this %|) bowl)
::
++  on-fail   on-fail:def
++  on-leave  on-leave:def
++  on-agent  on-agent:def
++  on-peek   on-peek:def
++  on-arvo   on-arvo:def
++  on-init   on-init:def
++  on-save   on-save:def
++  on-load   on-load:def
++  on-poke
  |=  [=mark =vase]
  ^-  (quip card _this)
  ?+  mark  (on-poke:def mark vase)
      %noun
    `this
      %clickme-action
    ?.  =(src.bowl our.bowl)
      `this
    ?+    q.vase  (on-poke:def mark vase)
        %show
      ~&  >  points.state
      `this
        %click
      =.  points.state  +(points.state)
      :_  this
        :~
           [%give %fact ~[/point-updates] [%clickme-update !>(`@ud`points.state)]]
        ==
    ==
  ==
++  on-watch
 |=  =path
  ^-  (quip card _this)
  ?.  =(src.bowl our.bowl)  `this
  ?+    path  (on-watch:def path)
    [%point-updates ~]
      :_  this
        :~
           [%give %fact ~[/point-updates] [%clickme-update !>(`@ud`points.state)]]
        ==
  ==
--

